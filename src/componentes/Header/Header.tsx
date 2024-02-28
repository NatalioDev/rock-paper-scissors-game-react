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
            <label htmlFor="score" className="scored-label">{points}</label>
            <p id="score">0</p>
        </div>
    </header>
  )
}
