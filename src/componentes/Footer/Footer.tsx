// Hook
import { useState } from "react"

// Styles
import "./Footer.css"

// Assets
import { iconClose, imageRules, imageRulesBonus } from "../../assets/assets";

type Props = {
  setGameState: (value: number) => void,
  isGameModified: boolean | undefined,
}

export default function Footer({setGameState, isGameModified}: Props) {

  const [rulesOpen, setRulesOpen] = useState(false);

  const returnToMenu = () => {
    setGameState(0)
  }

  return (
    <>
      <div id="footer-game">
        <button 
          id="menu-btn"
          onClick={() => returnToMenu()}
          className="menu-btn menu-toggle"
          >
            Menu
        </button>
        <button 
          id="rules-btn"
          onClick={() => setRulesOpen(true)}
          className="rules-btn rules-toggle"
          >
            Rules
        </button>
      </div>
      {rulesOpen ? (
        <div id="game-rules-footer">
          <div className="container-footer">
            <p>Rules</p>
            <img id="rules-image" src={isGameModified ? imageRulesBonus : imageRules} alt="" />
            <img id="close-image" src={iconClose} alt="" onClick={() =>setRulesOpen(false)} />
          </div>
        </div>
      ):(
        ''
      )}
    </>
  )
}
