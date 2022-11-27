# React Custom Hook

Proyecto que permite customizar

Before:
```javascript
function App() {

  const [stateBtn, setStateBtn] = useState(false)

  const handleClick = () => {
    setStateBtn(!stateBtn)
    console.log(stateBtn)
  }

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
```

After
```javascript
function useStateFn() {
  const [stateBtn, setStateBtn] = useState(false)

  const handleClick = () => {
    setStateBtn(!stateBtn)
    console.log(stateBtn)
  }
  return {stateBtn, handleClick}
}

function App() {

  const [stateBtn, setStateBtn] = useState(false)

  const handleClick = () => {
    setStateBtn(!stateBtn)
    console.log(stateBtn)
  }

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
```
