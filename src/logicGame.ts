// Definición de las opciones disponibles para el juego
const options = ['rock', 'paper', 'scissors', 'lizard', 'spack'];

// Definición de las combinaciones de opciones que ganan a otras opciones
const beating = [
    ['lizard', 'scissors'], // Lizard vence a Scissors
    ['rock', 'spock'], // Rock vence a Spock
    ['paper', 'lizard'], // Paper vence a Lizard
    ['spock', 'paper'], // Spock vence a Paper
    ['scissors', 'rock'], // Scissors vence a Rock
]

// Función para obtener la eleccion de la IA
const getAIChoice = (modified: boolean) => {
    let number: number
    // Si el juego está modificado, la IA elige entre las 5 opciones disponibles
    if(modified){
        number = Math.floor(Math.random()*5)
    }else{ // Si no está modificado, la IA elige entre las 3 opciones originales
        number = Math.floor(Math.random()*3)
    }
    return number
};
// Función para determinar al ganador del juego
const whoIsWinner = (PlayerChoice: number, AIChoice: number) => {
    // Si la elección del jugador es igual a la elección de la IA, es un empate
    if(PlayerChoice === AIChoice){
        return 'Draw';
    } else { // Si no, se verifica si el jugador vence a la elección de la IA
        if(beating[PlayerChoice].includes(options[AIChoice])){
            return "Player" // El jugador gana
        }else{
            return "AI" // El jugador pierde
        }
    }
};

// Exportación de las funciones y opciones para su uso en otros archivos
export {options, getAIChoice, whoIsWinner};