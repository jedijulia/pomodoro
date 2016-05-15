const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

const app = electron.app;
let win = null;

app.on('ready', function() {
    const windowPath = 'file://' + path.join(__dirname, 'index.html');

    win = new BrowserWindow({ width: 300, height: 300, resizable: false });
    win.on('closed', function() {
        win = null;
    });

    win.loadURL(windowPath);
    win.show();
});
