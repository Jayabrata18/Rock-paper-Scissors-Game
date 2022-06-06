
const computerChoiceDisplay = document.getElementsById('computer-choice')
const userChoiceDisplay = document.getElementsById('user-choice')
const resultDisplay = document.getElementsById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
 userChoice =e.target.id 
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))
 function generateComputerChoice() {
     const randomNumber = math.floor(Math.random() * 3) + 1
    //  console.log(randomNumber)
    if (randomNumber === 1) {
      computerChoice ='rock'
    }
    if (randomNumber === 2) {
      computerChoice ='paper'
    }
    if (randomNumber === 3) {
        computerChoice ='scissors'
    }
      computerChoiceDisplay.innerHTML=computerChoice
    
  }
  function getResult() {
    if (computerChoice === userChoice){
      result = "Its a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
      result = "You win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
      result = "You Lost!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
      result = "You win!"
    }  
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "You Lost!"
    }    
    if (computerChoice === 'scissors' && userChoice === 'paper'){
          result = "You Lost!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
      result = "You win!"
    }
      
    resultDisplay.innerHTML= result
    
  }

// if (typeof window !== 'undefined') {
//     console.log('You are on the browser')
//   } else {
//     console.log('You are on the server')
//   }