
const options = ['rock', 'paper', 'scissors', 'lizard', 'spack'];

const beating = [
    ['lizard', 'scissors'],
    ['rock', 'spock'],
    ['paper', 'lizard'],
    ['spock', 'paper'],
    ['scissors', 'rock'],
]

const getAIChoice = (modified: boolean) => {
    let number: number
    if(modified){
        number = Math.floor(Math.random()*5)
    }else{
        number = Math.floor(Math.random()*3)
    }
    return number
};

const whoIsWinner = (playerChoice: number, AIChoice: number) => {
    if(playerChoice === AIChoice){
        return 'Draw';
    } else {
        const playerOption = options[playerChoice];
        const AIOption = options[AIChoice];
        for (let i = 0; i < beating.length; i++) {
            if (beating[i][0] === playerOption && beating[i][1] === AIOption) {
                return 'Player';
            } else if (beating[i][0] === AIOption && beating[i][1] === playerOption) {
                return 'AI';
            }
        }
    }
    return 'Draw'; // En caso de que no haya ganador ni empate
};


export {options, getAIChoice, whoIsWinner};