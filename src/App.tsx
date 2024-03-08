// Hooks
import { useEffect, useState } from 'react'
// Styles
import './App.css'

//Components
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import MainMenu from './componentes/MainMenu/MainMenu'
import MainGame from './componentes/MainGame/MainGame'

// Assets (imágenes, etc..)
import { logo, logoBonus } from './assets/assets'

function App() {

  // Estado que maneja el estado del juego (0: menú principal, 1: juego en curso)
  const [gameState, setGameState] = useState(0);
  
  // Estado que maneja si la opción elegida es del juego modificado
  const [isGameModified, setIsGameModified] = useState<boolean>();
  
  // Estado que maneja el score del juego clásico
  const [classicPoints, setClassicPoints] = useState(0);
  
  // Estado que maneja el score del juego modificado 
  const [modifiedPoints, setModifiedPoints] = useState(0);
  
  // Variable para la recarga del juego
  let loaded = false;

  // Efecto que se ejecuta una vez al cargar la aplicación para cargar los puntos guardados en el localStorage
  useEffect(() => {
    const classicLocalPoints = Number(localStorage.getItem('classicPoints'));
    const modifiedLocalPoints = Number(localStorage.getItem('modifiedPoints'));

    if(classicLocalPoints !== null) setClassicPoints(classicLocalPoints);
    if(modifiedLocalPoints !== null) setModifiedPoints(modifiedLocalPoints);

    loaded = true;

    setTimeout(() => (loaded = false), 1000)
  }, [])
  

  // Efecto que se ejecuta cuando cambia el score del juego clásico para guardarlo en el localStorage
  useEffect(() => {
    if (loaded) return
    localStorage.setItem('classicPoints', modifiedPoints.toString())
  }, [classicPoints])
  
  // Efecto que se ejecuta cuando cambia el score del juego modificado para guardarlo en el localStorage
  useEffect(() => {
    if (loaded) return
    localStorage.setItem('modifiedPoints', modifiedPoints.toString())
  }, [modifiedPoints])

  return (
    <>
      <div 
        id={`state-${gameState}`}
        className={`app ${isGameModified ? 'modified' : ''}`}>
        {/* Componente del menú principal */}
        <MainMenu 
          setGameState={setGameState}
          setIsGameModified={setIsGameModified}/>
        {/* Componente del encabezado */}
        <Header
          points={isGameModified ? modifiedPoints : classicPoints}
          src={isGameModified ? logoBonus : logo}
        />
        {/* Componente del juego principal */}
        <MainGame
          isGameModified={isGameModified}
          points={isGameModified ? modifiedPoints : classicPoints}
          setPoints={isGameModified ? setModifiedPoints : setClassicPoints}
          gameState={gameState}
          setGameState={setGameState}
        />
        {/* Componente del pie de página */}
        <Footer
          setGameState={setGameState} 
          isGameModified={isGameModified}
        />
      </div>
      
    </>
  )
}

export default App
