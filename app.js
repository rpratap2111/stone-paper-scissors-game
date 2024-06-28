let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const user_Score = document.querySelector("#user-score")
const comp_Score = document.querySelector("#comp-score");

const drawGame = () => {
    // console.log("Game was draw.")
    msg.innerText = "Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user_Score.innerText = userScore;
    }
    else {
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        comp_Score.innerText = compScore;
    }
}

const genCompChoice = () => {
    let options = ["stone", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)]; 
}

const playGame = (userChoice) => {
    // console.log("User Choice =", userChoice);
    let compChoice = genCompChoice();
    // console.log("Computer Choice =",compChoice);

    if(userChoice == compChoice) drawGame();
    else{
        let userWin = true;
        if(userChoice == "stone"){
            if(compChoice == "paper") userWin = false;
            else userWin = true;
        }
        else if(userChoice == "paper"){
            if(compChoice == "scissors") userWin = false;
            else userWin = true;
        }
        else{
            if(compChoice == "stone") userWin = false;
            else userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})
