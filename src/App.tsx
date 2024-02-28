
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import MainMenu from './componentes/MainMenu/MainMenu'
import MainGame from './componentes/MainGame/MainGame'
import { logo, logoBonus } from './assets/assets'

function App() {

  const [gameState, setGameState] = useState(0);
  const [isGameModified, setIsGameModified] = useState<boolean>();
  const [classicPoints, setClassicPoints] = useState(0);
  const [modifiedPoints, setModifiedPoints] = useState(0);
  let loaded = false;

  useEffect(() => {
    const classicLoalPoints = Number(localStorage.getItem('classicPoints'));
    const modifiedLoalPoints = Number(localStorage.getItem('modifiedPoints'));

    if(classicLoalPoints !== null) setClassicPoints(classicLoalPoints);
    if(modifiedLoalPoints !== null) setModifiedPoints(modifiedLoalPoints);

    loaded = true;

    setTimeout(() => (loaded = false), 1000)
  }, [])
  
  useEffect(() => {
    if (loaded) return
    localStorage.setItem('classicPoints', modifiedPoints.toString())
  }, [classicPoints])
  
  useEffect(() => {
    if (loaded) return
    localStorage.setItem('modifiedPoints', modifiedPoints.toString())
  }, [modifiedPoints])

  return (
    <>
      <div 
        id={`state-${gameState}`}
        className={`app ${isGameModified ? 'modified' : ''}`}>
        <MainMenu 
          setGameState={setGameState}
          setIsGameModified={setIsGameModified}/>
        <Header
          points={isGameModified ? modifiedPoints : classicPoints}
          src={isGameModified ? logoBonus : logo}
        />
        <MainGame
          isGameModified={isGameModified}
          points={isGameModified ? modifiedPoints : classicPoints}
          setPoints={isGameModified ? setModifiedPoints : setClassicPoints}
          gameState={gameState}
          setGameState={setGameState}
        />
        <Footer
          setGameState={setGameState} 
          isGameModified={isGameModified}
        />
      </div>
      
    </>
  )
}

export default App
