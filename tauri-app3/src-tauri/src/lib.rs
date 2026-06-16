use std::path::{Path, PathBuf};

use serde::Deserialize;
use tauri::{path::BaseDirectory, AppHandle, Manager};

#[derive(Deserialize)]
struct InstallConfig {
    #[serde(rename = "downloadUrl")]
    download_url: String,
    #[serde(rename = "fileName")]
    file_name: String,
    #[serde(rename = "installDir")]
    install_dir: String,
}

fn expand_environment_variables(path: &str) -> Result<String, String> {
    let mut result = path.to_string();

    while let Some(start) = result.find('%') {
        let rest = &result[start + 1..];
        let Some(end) = rest.find('%') else {
            break;
        };

        let var_name = &rest[..end];
        let value = std::env::var(var_name)
            .map_err(|_| format!("Environment variable `{var_name}` is not set"))?;

        result.replace_range(start..start + 1 + end + 1, &value);
    }

    Ok(result)
}

fn expand_path(path: &str) -> Result<PathBuf, String> {
    let expanded = expand_environment_variables(path)?;

    if let Some(rest) = expanded.strip_prefix("~/") {
        let home = dirs::home_dir().ok_or("Could not resolve home directory")?;
        return Ok(home.join(rest));
    }

    if expanded == "~" {
        return dirs::home_dir().ok_or_else(|| "Could not resolve home directory".to_string());
    }

    Ok(PathBuf::from(expanded))
}

fn resolve_destination(install_dir: &str, file_name: &str) -> Result<PathBuf, String> {
    let dir = expand_path(install_dir.trim_end_matches(['/', '\\']))?;
    let name = Path::new(file_name)
        .file_name()
        .ok_or_else(|| "Invalid file name".to_string())?;

    Ok(dir.join(name))
}

fn resource_path(app: &AppHandle, resource: &str) -> Result<PathBuf, String> {
    app.path()
        .resolve(resource, BaseDirectory::Resource)
        .map_err(|error| format!("Failed to resolve resource `{resource}`: {error}"))
}

fn load_install_config(app: &AppHandle) -> Result<InstallConfig, String> {
    let config_path = resource_path(app, "resources/install.config.json")?;
    let contents = std::fs::read_to_string(&config_path)
        .map_err(|error| format!("Failed to read install config: {error}"))?;

    serde_json::from_str(&contents)
        .map_err(|error| format!("Failed to parse install config: {error}"))
}

fn download_file(url: &str) -> Result<Vec<u8>, String> {
    let response = reqwest::blocking::get(url)
        .map_err(|error| format!("Failed to download file: {error}"))?;

    if !response.status().is_success() {
        return Err(format!(
            "Download failed with status {}",
            response.status()
        ));
    }

    response
        .bytes()
        .map(|bytes| bytes.to_vec())
        .map_err(|error| format!("Failed to read downloaded file: {error}"))
}

#[tauri::command]
fn install_build_file(app: AppHandle) -> Result<String, String> {
    let config = load_install_config(&app)?;
    let destination = resolve_destination(&config.install_dir, &config.file_name)?;

    if let Some(parent) = destination.parent() {
        std::fs::create_dir_all(parent)
            .map_err(|error| format!("Failed to create install directory: {error}"))?;
    }

    let bytes = download_file(&config.download_url)?;
    std::fs::write(&destination, bytes)
        .map_err(|error| format!("Failed to write file to {}: {error}", destination.display()))?;

    Ok(destination.to_string_lossy().into_owned())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![install_build_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
