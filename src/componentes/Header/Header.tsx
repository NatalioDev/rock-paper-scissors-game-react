import "./Header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="logo">
            <img src="images/logo.svg" id="logo" alt="logo" className="logo-img" />
        </div>
        <div className="scored">
            <label htmlFor="score" className="scored-label">Score</label>
            <p id="score">0</p>
        </div>
    </div>
  )
}
