const { ipcRenderer } = require('electron')

const sendEvent = () => {
  return ipcRenderer.invoke('SOME_EVENT', 'payload')
}

export { sendEvent }
