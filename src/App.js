import React, {useState, useEffect} from 'react'
import axios from 'axios'
const {ipcRenderer} = window.require('electron')

// Get server port from electron and set as default url
const serverRes = ipcRenderer.sendSync('set-server')
axios.defaults.baseURL = `http://localhost:${serverRes.port}`

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:5010/test')
      setMessage(res.data.message)
    })()
  }, [])

  return (
    <div className="App">
      <h1>Message</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
