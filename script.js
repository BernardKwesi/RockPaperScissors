//function returns random selection 
function computerplay(){
    const arr = ['rock','paper','scissors'];
    random = Math.floor(Math.random() * arr.length);

    return arr[random];

}
//Rock beats scissor
//paper beats rock
//scissors beats paper

//function takes two args 
function playRound(computerSelection,playerSelection){

   playerSelection = playerSelection.toLowerCase();
   // console.log(playerSelect.toLowerCase());
    
    
    if (playerSelection == "rock" && computerSelection =="paper"){
            return "You lose!!. Paper beats rock";
    }
    else if(playerSelection == "rock" && computerSelection =="scissors"){

            return "You win!!. Rock beats Scissor";
    }
    else if(
        (playerSelection == "rock" && computerSelection =="rock") ||
    (playerSelection == "paper" && computerSelection =="paper") ||
    (playerSelection == "scissors" && computerSelection =="scissors")
        ){
            return "Its a tie";
    }
    else if(playerSelection == "paper" && computerSelection =="scissors"){
            return "You lose!!. Scissor beats paper.";
    }
    else if(playerSelection == "paper" && computerSelection =="rock"){
            return "You win!!. Paper beats rock";
    }
    else if(playerSelection == "scissors" && computerSelection =="paper"){
            return "You win!!. Scissors beats paper";
    }
    else if(playerSelection == "scissors" && computerSelection =="rock"){
            return "You lose!!. Scissors beats rock";
    }
 

}



function game(){

      
        for(let i=0; i<5; i++){
                const computerSelect = computerplay();
                const playerSelection = prompt("Rock,Paper,Scissors");
               console.log(playRound(computerSelect,playerSelection)) ;
       
        
        }

}

game();