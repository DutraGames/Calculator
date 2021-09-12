import {app, BrowserWindow, Menu} from 'electron'
import {resolve} from 'path'

const iconpath = resolve(__dirname, '../', 'assets', 'icon.png')

function createWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 400,
      title: "Calculator",
      resizable:false,
      show: false,
      icon: iconpath,
    })

    win.setMenu(null)

    win.on("ready-to-show", ()=>{
      win.show()
    })

    win.loadFile('index.html')
}

app.whenReady().then(() =>{
    createWindow()
})