import { app, BrowserWindow } from "electron";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const packageJson = JSON.parse(
  readFileSync(join(__dirname, "package.json"), "utf-8"),
);
const { productName } = packageJson;

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 620,
    title: productName,
    icon: join(__dirname, "public/icons/app-icon.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // add this line
    },
  });
  win.webContents.openDevTools();

  win.loadFile(join(__dirname, "dist/index.html"));
}

app.whenReady().then(() => {
  if (process.platform === "darwin") {
    app.dock.setIcon(join(__dirname, "public/icons/app-icon.png"));
  }
  createWindow();
});
