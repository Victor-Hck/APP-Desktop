const { app, BrowserWindow } = require('electron');
const path = require('path');

// Recarrega a janela automaticamente quando arquivos mudam
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/../node_modules/electron`)
});

function createWindow () {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false, // necessário para usar require no renderer.js
    }
});

win.loadFile(path.join(__dirname, 'login/index.html'));

//Remove o menu padrão
win.removeMenu();

// Abre o DevTools automaticamente
win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
