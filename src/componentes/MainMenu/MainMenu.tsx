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
    <div className="main-menu-cont">
        <button onClick={() => startGame(false)}>
            Classic
        </button>
        <button onClick={() => startGame(true)}>
            Modified
        </button>
    </div>
  )
}

export default MainMenu
