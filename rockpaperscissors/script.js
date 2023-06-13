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

function excuteRound(player_choice, computer_choice) {
    player_choice = player_choice.toLowerCase(player_choice);
    if (player_choice == computer_choice) {
        return "Draw! You're both dumb!";
    } else if (player_choice == "rock") {
        if (computer_choice == "paper") {
            return `A computer just beat your ass! It picked ${computer_choice}`;
        } else {
            return `You a beat computer's ass! It picked ${computer_choice}`;
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "scissors") {
            return `A computer just beat your ass! It picked ${computer_choice}`;
        } else {
            return `You a beat computer's ass! It picked ${computer_choice}`;
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            return `A computer just beat your ass! It picked ${computer_choice}`;
        } else {
            return `You a beat computer's ass! It picked ${computer_choice}`;
        }
    } else {
        return `wtf does ${player_choice} even mean? you understand the game right?`;
    }
}
