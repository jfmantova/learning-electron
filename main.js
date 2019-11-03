const {app, BrowserWindow} = require('electron')

function createWindow() {
    let window = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile('index.html')
}

app.on('ready', createWindow)