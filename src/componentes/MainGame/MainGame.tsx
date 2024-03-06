// Hooks
import { useEffect, useState } from "react"

// styles
import "./MainGame.css"

// Functions Logic
import { getAIChoice, options, whoIsWinner } from "../../logicGame";

// Assets
import { bgPentagon, bgTriangle, gameThings } from "../../assets/assets";

type Props = {
    isGameModified: boolean | undefined,
    points: number,
    setPoints: (value: number) => void,
    gameState: number,
    setGameState: (value: number) => void
}

export default function MainGame({ isGameModified, points, setPoints, gameState, setGameState}: Props) {

    const [playerChoice, setPlayerChoice] = useState<number>();
    const [AIChoice, setAIChoice] = useState<number>();
    const [winner, setWinner] = useState<string>();


    const playerChooseFunction = (index: number) =>{
        setPlayerChoice(index)
        console.log("isGameModified:", isGameModified);
        isGameModified !== undefined ? setAIChoice(getAIChoice(isGameModified)) : '';
        setGameState(3);

        setTimeout(() =>{
            setGameState(4)
        }, 1500)

        setTimeout(() => {
            setGameState(5)
        }, 3000)
    }

    const reset = () => {
        setAIChoice(undefined);
        setWinner(undefined);
        setGameState(3);
        setTimeout(() => {
            setGameState(2);
            setPlayerChoice(undefined);
        }, 1000)
    };

    useEffect(() => {
        if(gameState === 0){
            setPlayerChoice(undefined);
            setAIChoice(undefined);
            setWinner(undefined);
        }
    }, [gameState]);

    useEffect(() => {
        if(playerChoice !== undefined && AIChoice !== undefined){
            setWinner(whoIsWinner(playerChoice, AIChoice))
        }
    }, [playerChoice, AIChoice]);
    

    useEffect(() => {
        if(gameState !== 5) return
        if(winner === "Player"){
            setPoints(points + 1);
        }else if (winner === "AI"){
            setPoints(points - 1);
        }
    }, [winner, gameState]);


  return (
    <>
        <div id="player-chooses">
            <div className={`${gameState === 5 && winner === 'Player' ? 'winner' : ''}`}></div>
            <img 
                id="bg-img"
                src={isGameModified ? bgPentagon : bgTriangle}
                alt={isGameModified ? 'bgPentagon' : 'bgTriangle'} />
            {gameThings.map((i, index) => {
                if(!isGameModified){
                    if(index < 3){
                        return(
                            <div 
                                key={index}
                                onClick={() => {
                                    playerChooseFunction(index);
                                }}
                                className={`item item-${index} ${index === playerChoice ? 'chosen' : ''}`}>
                                    <div>
                                        <img src={i} alt={options[index]} />
                                    </div>
                                </div>
                        )
                    } else return
                }else {
                    return (
                        <div 
                            key={index}
                            onClick={() => {
                                playerChooseFunction(index)
                            }}
                            className={`item item-${index} ${index === playerChoice ? 'chosen' : ''}`}
                        >
                            <div>
                                <img src={i} alt={options[index]} />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
        <div id="ai-choice" className={`${gameState === 5 && winner === "AI" ? 'winner' : ''}`}>
            {gameState <= 4 ? (
                <div className="waiting"></div>
            ): gameState === 5 ? (
                <div className={`item item-${AIChoice}`}>
                    <div>
                        <img src={AIChoice !== undefined ? gameThings[AIChoice] : ''} alt={AIChoice !== undefined ? options[AIChoice] : ''} />
                    </div>
                </div>
            ):(
                ''
            )}
        </div>

        <div id="play-again" >
        {winner !== undefined && (
        <p>{winner === 'Player' ? "You Win" : winner === 'AI' ? "You Lose" : winner === 'Draw' ? "Draw" : '' }</p>
    )}
            <button onClick={() => reset()}>Play Again</button>
        </div>
    </>
  )
}
