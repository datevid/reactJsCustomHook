import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function useStateFn() {
  const [stateBtn, setStateBtn] = useState(false)

  const handleClick = () => {
    setStateBtn(!stateBtn)
    console.log(stateBtn)
  }
  return {stateBtn, handleClick}
}
function App() {

  const {stateBtn,handleClick}=useStateFn()

  return (
    <div className="App">
      <button onClick={handleClick}>
        toogle
      </button>
      <p>
        {stateBtn.toString()}
      </p>
    </div>
  )
}

export default App
