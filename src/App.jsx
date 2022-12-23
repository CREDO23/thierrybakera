import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/css/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className='btn'>
        Envoyer
      </button>
    </div>
  )
}

export default App
