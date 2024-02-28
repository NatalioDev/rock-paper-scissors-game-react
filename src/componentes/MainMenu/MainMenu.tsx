import "./MainMenu.css"

type Props = {
  setGameState: (value: number) => void,
  setIsGameModified: (value: boolean) => void
}

function MainMenu( {setGameState, setIsGameModified} : Props) {

  const startGame = (modified: boolean) => {
    setGameState(1)
    setIsGameModified(modified);
    setTimeout(() => setGameState(2), 1000)
  }

  return (
    <div className="main-menu-container">
        <button className="btn-classic" onClick={() => startGame(false)}>
            Rock <br /> Paper <br /> Scissors
        </button>
        <button className="btn-modified" onClick={() => startGame(true)}>
          Rock <br /> Paper <br /> Scissors <br /> Lizard <br /> Spock
        </button>
    </div>
  )
}

export default MainMenu
