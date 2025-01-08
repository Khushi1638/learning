// accessing the score of user and computer
let userScore = 0;
let compScore = 0;

// now accessing the choices that the user and computer going to choose

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const updUserScore = document.querySelector("#user-score");
const updCompScore = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock" , "paper" ,"scissors"];
    const ranIdx = Math.floor(Math.random() * 3); 
    return options[ranIdx];
}

// to print if game is draw
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor="#081b31";
}

// this function will show who is the winner
const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        updUserScore.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        updCompScore.innerText = compScore;
        msg.innerText = `Computer win! Your ${userChoice} did noot beat ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame = (userChoice) => {
    //generste computer choice
    const compChoice = genComChoice();
    
    if(userChoice === compChoice){
        // this function will print the if the game is draw
        drawGame();
    } else {
        userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        } else {
            userWin = compChoice === "rock" ? false :true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

// here we generate the user choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // this function uesd  to perform all the logic
        playGame(userChoice);
    });
});