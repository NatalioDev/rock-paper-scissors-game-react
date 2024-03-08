// Estyles
import "./MainMenu.css"

// Definición del tipo de las propiedades recibidas por el componente MainMenu
type Props = {
  setGameState: (value: number) => void, // Función para cambiar el estado del juego
  setIsGameModified: (value: boolean) => void // Función para establecer si el juego esta modificado
}

// Componente funcional MainMenu que recibe las propiedades definidas arriba
function MainMenu( {setGameState, setIsGameModified} : Props) {

  // Función para comenzar el juego con las opciones clásicas o midificadas
  const startGame = (modified: boolean) => {
    setGameState(1); // Cambia el estado del juego al estado de juego en curso
    setIsGameModified(modified); // Establece si el juego está modificado o no
    setTimeout(() => setGameState(2), 1000); // Después de 1s, cambia el estado del juego a un estado de trnsición
  }

  // Renderizado del componente MainMenu
  return (
    <div className="main-menu-container">
        {/* Botón para comenzar el juego con las opciones clásicas */}
        <button className="btn-classic" onClick={() => startGame(false)}>
            Rock <br /> Paper <br /> Scissors
        </button>
        {/* Botón para comenzar el juego con las opciones modificadas */}
        <button className="btn-modified" onClick={() => startGame(true)}>
          Rock <br /> Paper <br /> Scissors <br /> Lizard <br /> Spock
        </button>
    </div>
  )
}

export default MainMenu
