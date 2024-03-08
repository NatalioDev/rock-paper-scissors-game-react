import "./Header.css"

// Declaramos los tipos necesarios
type Props = {
  points: number,
  src: string,
}

export default function Header({points, src}: Props) {
  return (
    <header className="header">
      {/* Mostramos nuestro logo segun el juego seleccionado */}
        <div className="logo">
            <img src={src} id="logo" alt="logo" className="logo-img" />
        </div>
        {/* Mostramos el scored */}
        <div className="scored">
            <label htmlFor="score" className="scored-label">Score</label>
            <p id="score">{points}</p>
        </div>
    </header>
  )
}
