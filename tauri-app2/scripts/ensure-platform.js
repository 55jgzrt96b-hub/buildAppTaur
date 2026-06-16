const platform = process.argv[2];
const current = process.platform;

const labels = {
  darwin: "macOS",
  linux: "Linux",
  win32: "Windows",
};

if (!platform || !labels[platform]) {
  console.error("Usage: node scripts/ensure-platform.js <darwin|linux|win32>");
  process.exit(1);
}

if (current !== platform) {
  console.error(
    `\n${labels[platform]} build cannot run on ${labels[current] ?? current}.\n` +
      `Use one of these options:\n` +
      `  • npm run tauri:build:mac      (on macOS)\n` +
      `  • npm run tauri:build:linux    (on Linux)\n` +
      `  • npm run tauri:build:windows  (on Windows)\n` +
      `  • GitHub Actions workflow: .github/workflows/build.yml\n` +
      `    Push a tag v* or run the workflow manually in GitHub Actions.\n`,
  );
  process.exit(1);
}
