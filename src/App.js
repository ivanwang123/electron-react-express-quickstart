import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
      <h1>Calendar</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
