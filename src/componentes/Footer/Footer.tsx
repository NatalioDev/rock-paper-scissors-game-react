// Hook
import { useState } from "react"

// Styles
import "./Footer.css"

// Assets
import { iconClose, imageRules, imageRulesBonus } from "../../assets/assets";

// Definición del tipo de las propiedades recibidas por el componente Footer
type Props = {
  setGameState: (value: number) => void, // Función para cambiar el estado del juego
  isGameModified: boolean | undefined, // Indica si el juego está modificado o no
}
// Componente funcional Footer que recibe las propiedades definidas arriba
export default function Footer({setGameState, isGameModified}: Props) {

  // Estado local para controlar si las reglas están abiertas o cerradas
  const [rulesOpen, setRulesOpen] = useState(false);

  // Función para volver al menú principal
  const returnToMenu = () => {
    setGameState(0) // Cambia el estado del juego al menú principal
  }

  // Renderizado del componente Footer
  return (
    <>
      {/* Contenedor del footer del juego */}
      <div id="footer-game">
        {/* Botón para regresar al menú principal */}
        <button 
          id="menu-btn"
          onClick={() => returnToMenu()} // Evento click que llama a la función returnToMEnu
          className="menu-btn menu-toggle" // Clase para estilos y toggle
          >
            Menu
        </button>
        <button 
          id="rules-btn"
          onClick={() => setRulesOpen(true)} // Evento click que llama a la función setRulesOpen
          className="rules-btn rules-toggle" // Clase para estilos y toggle
          >
            Rules
        </button>
      </div>
      {/* Sección para mostrar las reglas del juego si están abiertas */}
      {rulesOpen ? (
        <div id="game-rules-footer">
          {/* Contenedor de las reglas del juego */}
          <div className="container-footer">
            <p>Rules</p> {/*Título de las reglas*/}
            {/* Imagen que muestra las reglas del juego */}
            <img id="rules-image" src={isGameModified ? imageRulesBonus : imageRules} alt="" />
            {/* Icono para cerrar las reglas del juego */}
            <img id="close-image" src={iconClose} alt="" onClick={() =>setRulesOpen(false)} />
          </div>
        </div>
      ):(
        '' // Si las reglas no están abiertas, no se muestra nada
      )}
    </>
  )
}
