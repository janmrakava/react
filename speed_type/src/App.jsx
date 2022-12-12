import react from "react"
import useWordGame from '../hooks/useWordGame'

import './App.css'

function App() {

  const {
    textAreaRef, 
    wordCount,
    shouldRun, 
    handleChange, 
    text, 
    startGame, 
    time
  } = useWordGame(5)
  




  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!shouldRun}
        ref={textAreaRef}
      />
      <h4>Time remaining: {time}</h4>
      <button 
          onClick={startGame}
          disabled={shouldRun}
    >
            Start</button>
      
      <h1>Word count: {wordCount}</h1>
    </div>
  )

}


export default App
