import {useState, useEffect, useRef} from "react"

function useWordGame(startingTime = 10){   

  const [text,setText] = useState('')
  const [time, setTime] = useState(startingTime)
  const [shouldRun, setShouldRun] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textAreaRef = useRef(null)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }
  
  function startGame(){
    setShouldRun(true)
    setTime(startingTime)
    setText('')
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  function endGame() {
    setShouldRun(false)
    setWordCount(countWords(text))
}

  function countWords(text){
    return text.split(' ').filter(function(num) {
      return num != ''
     }).length;
  }
  
  useEffect(() => {
      if(time > 0 && shouldRun) {
          setTimeout(() => {
              setTime(time => time - 1)
          }, 1000)
      } else if(time === 0) {
        endGame()
      }
  }, [shouldRun, time])

  return {textAreaRef, wordCount, shouldRun, handleChange, text, startGame, time}
  
}


export default useWordGame