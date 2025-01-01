import { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay'

function App() {

  const [isGameStarted,setGameStart]=useState(true);

  const toggleGamePlay=()=>{
    setGameStart((prev)=>!prev)
  }

  return (
    <>
    {console.log(isGameStarted)}
      { isGameStarted?<GamePlay />:<StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
