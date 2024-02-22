import "./Pick.css";

export default function Pick() {
  return (
    <div className="pick">
        <img src="images/icon-paper.svg" alt="paper" id="pick-paper" className="paper pick-paper btn" />
        <img src="images/icon-scissors.svg" alt="paper" id="pick-scissors" className="scissors pick-scissors btn" />
        <div className="p-space"></div>
        <img src="images/icon-rock.svg" alt="paper" id="pick-rock" className="rock pick-rock btn" />
    </div>
  )
}
