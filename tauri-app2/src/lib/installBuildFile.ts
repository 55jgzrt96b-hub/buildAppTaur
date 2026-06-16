import { invoke } from "@tauri-apps/api/core";

export async function installBuildFile(): Promise<string> {
  return invoke<string>("install_build_file");
}
