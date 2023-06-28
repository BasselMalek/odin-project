function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3);
    switch (rand_num) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;

        default:
            break;
    }
}

function excuteRound() {
    let player_choice = getPlayerChoice();
    let computer_choice = getComputerChoice();
    const resultText = document.getElementById("result-text");
    if (player_choice == computer_choice) {
        resultText.textContent = "Draw! You're both dumb!";
    } else if (player_choice == "rock") {
        if (computer_choice == "paper") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            return 0;
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            return 1;
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "scissors") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            return 0;
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            return 1;
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            return 0;
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            return 1;
        }
    } else {
        resultText.textContent = `wtf does ${player_choice} even mean? you understand the game right?`;
        return 0;
    }
}
function startGameSession(rounds = 5) {
    let player_score = 0,
        computer_score = 0;
    let lastGameWinner = "";
    const updatablePlayerScore = document.getElementById("player-score");
    const updatablePCScore = document.getElementById("computer-score");
    const updatableRound = document.getElementById("round");
    const updatablelast = document.getElementById("last-game-winner");
    for (let i = 0; i < rounds; i++) {
        let result = excuteRound();
        if (result) {
            player_score++;
        } else {
            computer_score++;
        }
        updatablePlayerScore.textContent = player_score;
        updatablelast.textContent = "Player";
        updatablePCScore.textContent = computer_score;
        updatablelast.textContent = "Computer";
        updatableRound.textContent = i;
    }
    if (player_score == computer_score) {
        excuteRound();
    }
    if (player_score > computer_score) {
        resultText.textContent = "You won. Woo.";
        updatablelast.textContent = "You.";
    } else {
        resultText.textContent = `The computer curb-stompped you ${computer_score} times. Severe skill issue on your side.`;
        updatablelast.textContent = "Computer";
    }
}

function selfSuffecientRound(player_choice) {
    let computer_choice = getComputerChoice();
    const resultText = document.getElementById("result-text");
    if (player_choice == computer_choice) {
        resultText.textContent = "Draw! You're both dumb!";
    } else if (player_choice == "rock") {
        if (computer_choice == "paper") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            computer_score++;
            updatablePCScore.textContent = computer_score;
            updatablelast.textContent = "Computer";
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            player_score++;
            updatablePlayerScore.textContent = player_score;
            updatablelast.textContent = "Player";
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "scissors") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            computer_score++;
            updatablePCScore.textContent = computer_score;
            updatablelast.textContent = "Computer";
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            player_score++;
            updatablePlayerScore.textContent = player_score;
            updatablelast.textContent = "Player";
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            resultText.textContent = `A computer just beat your ass! It picked ${computer_choice}`;
            computer_score++;
            updatablePCScore.textContent = computer_score;
            updatablelast.textContent = "Computer";
        } else {
            resultText.textContent = `You a beat computer's ass! It picked ${computer_choice}`;
            player_score++;
            updatablePlayerScore.textContent = player_score;
            updatablelast.textContent = "Player";
        }
    } else {
        resultText.textContent = `wtf does ${player_choice} even mean? you understand the game right?`;
        return 0;
    }
}

var player_score = 0,
    computer_score = 0;
var lastGameWinner = "";
const updatablePlayerScore = document.getElementById("player-score");
const updatablePCScore = document.getElementById("computer-score");
const updatableRound = document.getElementById("round");
const updatablelast = document.getElementById("last-game-winner");

window.onload = function () {
    const startBtn = document.getElementById("start-button");
    startBtn.addEventListener("click", () => {
        const resultText = document.getElementById("result-text");
        resultText.textContent = "Choose a move";
        player_score = 0;
        computer_score = 0;
        lastGameWinner = "";
        updatablePlayerScore.textContent = player_score;
        updatablePCScore.textContent = computer_score;
        updatablelast.textContent = "";
    });
    const rockBtn = document.getElementById("rock");
    rockBtn.addEventListener("click", () => {
        selfSuffecientRound("rock");
    });
    const scisBtn = document.getElementById("scissors");
    scisBtn.addEventListener("click", () => {
        selfSuffecientRound("scissors");
    });
    const papeBtn = document.getElementById("paper");
    papeBtn.addEventListener("click", () => {
        selfSuffecientRound("paper");
    });
};
