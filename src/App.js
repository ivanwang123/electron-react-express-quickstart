import React, {useEffect} from 'react'
import axios from 'axios'

function App() {

  useEffect(async () => {
    console.log(await axios.get('http://localhost:5010/test'))
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
