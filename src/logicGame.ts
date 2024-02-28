
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

const whoIsWinner = (PlayerChoice: number, AIChoice: number) => {
    if(PlayerChoice === AIChoice){
        return 'Draw'
    }else{
        if(beating[PlayerChoice].includes(options[AIChoice])){
            return 'Player'
        }else{
            return 'AI'
        }
    }
};

export {options, getAIChoice, whoIsWinner};