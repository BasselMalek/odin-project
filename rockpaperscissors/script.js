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
    let player_choice = prompt(
        "Enter your choice for this round",
        "paper"
    ).toLowerCase();
    let computer_choice = getComputerChoice();
    if (player_choice == computer_choice) {
        alert("Draw! You're both dumb!");
    } else if (player_choice == "rock") {
        if (computer_choice == "paper") {
            alert(
                `A computer just beat your ass! It picked ${computer_choice}`
            );
            return 0;
        } else {
            alert(`You a beat computer's ass! It picked ${computer_choice}`);
            return 1;
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "scissors") {
            alert(
                `A computer just beat your ass! It picked ${computer_choice}`
            );
            return 0;
        } else {
            alert(`You a beat computer's ass! It picked ${computer_choice}`);
            return 1;
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            alert(
                `A computer just beat your ass! It picked ${computer_choice}`
            );
            return 0;
        } else {
            alert(`You a beat computer's ass! It picked ${computer_choice}`);
            return 1;
        }
    } else {
        alert(
            `wtf does ${player_choice} even mean? you understand the game right?`
        );
        return 0;
    }
}
function startGameSession(rounds = 5) {
    let player_score = 0,
        computer_score = 0;
    for (let i = 0; i < rounds; i++) {
        let result = excuteRound();
        if (result) {
            player_score++;
        } else {
            computer_score++;
        }
    }
    if (player_score == computer_score) {
        excuteRound();
    }
    if (player_score > computer_score) {
        alert("You won. Woo.");
    } else {
        alert(
            `The computer curb-stompped you ${computer_score} times. Severe skill issue on your side.`
        );
    }
}
