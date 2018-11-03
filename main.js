'use strict';

const qs = require ("querystring");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

require('electron-context-menu')();

//const pdfURL = "http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
  });

  //const param = qs.stringify({file: pdfURL});

  mainWindow.loadURL('file://' + __dirname + '/pdfjs/web/viewer.html');
  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
