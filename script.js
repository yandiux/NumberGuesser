let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget =(number)=> {
  let target = Math.floor(Math.random() * 10)
  return target
}


const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 10){
window.alert('Number needs to be between 0 and10');
  end ;
  }   
const humanDifference = Math.abs(targetGuess - humanGuess)
const computerDifference = Math.abs(targetGuess - computerGuess)
return humanDifference <= computerDifference;
}

//console.log(compareGuesses(7,3, generateTarget))


const updateScore =(winner) => {
  
  if (winner === "human") {
    humanScore++;
   }else {
   computerScore++;
  }
}

updateScore("human"); // Llamamos a la función para aumentar el puntaje del ordenador
console.log("Puntaje humano: " + humanScore); // Imprimirá 0
console.log("Puntaje ordenador: " + computerScore); // Imprimirá 1


//step 4

const advanceRound =() => {
  currentRoundNumber++
}

advanceRound();
console.log(currentRoundNumber)


