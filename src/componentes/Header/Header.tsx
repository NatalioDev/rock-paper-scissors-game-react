import "./Header.css"

type Props = {
  points: number,
  src: string,
}

export default function Header({points, src}: Props) {
  return (
    <header className="header">
        <div className="logo">
            <img src={src} id="logo" alt="logo" className="logo-img" />
        </div>
        <div className="scored">
            <label htmlFor="score" className="scored-label">Score</label>
            <p id="score">{points}</p>
        </div>
    </header>
  )
}
