// Hooks
import { useEffect, useState } from "react"

// styles
import "./MainGame.css"

// Functions Logic
import { getAIChoice, options, whoIsWinner } from "../../logicGame";

// Assets
import { bgPentagon, bgTriangle, gameThings } from "../../assets/assets";

// Definición de los tipos de propiedades
type Props = {
    isGameModified: boolean | undefined,
    points: number,
    setPoints: (value: number) => void,
    gameState: number,
    setGameState: (value: number) => void
}

// Definición del componente 
export default function MainGame({ isGameModified, points, setPoints, gameState, setGameState}: Props) {

    // Estados para la elección del jugador, la elección de la IA y el ganador
    const [playerChoice, setPlayerChoice] = useState<number>();
    const [AIChoice, setAIChoice] = useState<number>();
    const [winner, setWinner] = useState<string>();

    // Función para que el jugador elija su opción
    const playerChooseFunction = (index: number) =>{
        setPlayerChoice(index)
        // Se obtiene la elección de la IA si el juego no es modificado
        isGameModified !== undefined ? setAIChoice(getAIChoice(isGameModified)) : '';
        setGameState(3);

        // Cambio de estados para mostrar la elección de la IA y el resultado del juego
        setTimeout(() =>{
            setGameState(4)
        }, 1500)

        setTimeout(() => {
            setGameState(5)
        }, 3000)
    }

    // Función para reiniciar el juego
    const reset = () => {
        setAIChoice(undefined);
        setWinner(undefined);
        setGameState(3);
        setTimeout(() => {
            setGameState(2);
            setPlayerChoice(undefined);
        }, 1000)
    };

    // Efecto para reiniciar los estado cuando el estado del juego cambia a 0.
    useEffect(() => {
        if(gameState === 0){
            setPlayerChoice(undefined);
            setAIChoice(undefined);
            setWinner(undefined);
        }
    }, [gameState]);

    // Efecto para determinar al ganador después de uqe ambos jugadores elijan
    useEffect(() => {
        if(playerChoice !== undefined && AIChoice !== undefined){
            setWinner(whoIsWinner(playerChoice, AIChoice))
        }
    }, [playerChoice, AIChoice]);
    

    // Efecto para actualizar los puntos del jugador después de que se determina el ganador
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
        {/* Contenedor de la elección del jugador */}
        <div id="player-chooses">
            <div className={`${gameState === 5 && winner === 'Player' ? 'winner' : ''}`}></div>
            {/* Fondo del contenedor */}
            <img 
                id="bg-img"
                src={isGameModified ? bgPentagon : bgTriangle}
                alt={isGameModified ? 'bgPentagon' : 'bgTriangle'} />
                {/* Renderizado de las opciones de juego */}
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
        {/* Contenedor de la elcción de la IA */}
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
        {/* Contendor para volver a jugar */}
        <div id="play-again" >
        {winner !== undefined && (
        <p>{winner === 'Player' ? "You Win" : winner === 'AI' ? "You Lose" : winner === 'Draw' ? "Draw" : '' }</p>
    )}
            <button onClick={() => reset()}>Play Again</button>
        </div>
    </>
  )
}
