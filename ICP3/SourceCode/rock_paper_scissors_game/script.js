// This function reads the ID value from the image that has been clicked.
$(document).ready(function () {
    $("#rock").click(function () {
        compare("rock");
    });
    $("#paper").click(function () {
        compare("paper");
    });
    $("#scissors").click(function () {
        compare("scissors");
    });
});

// This function checks who is the winner
function compare(choice1) {
    // Computer's choice will be stored as systemChoice which is randomly generated
    var systemChoice = Math.random();
    if (systemChoice < 0.34) {
        choice2 = "rock";
    } else if (systemChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    if (choice1 === choice2) {

        alert( "Its a tie!!!" + " " + "Lets play again.");
    }

    else if (choice1 === "rock") {

        if (choice2 === "scissors") {
            alert( "rock wins"+ "!!! " + "Your the Winner, nice job!");
        }
        else {
            alert("paper wins"  + "!!! " + "Computer Wins, Good luck Next time!!!.") ;
        }
    }

    else if (choice1 === "paper") {

        if (choice2 === "rock") {
            alert("paper wins"+ "!!! " + "Your the Winner, nice job!") ;
        }
        else {
            alert("scissors wins"+ "!!! " + "Computer Wins, Good luck Next time!!!.") ;
        }

    }

    else if (choice1 === "scissors") {

        if (choice2 === "rock") {
            alert("rock wins"  + " " + "Computer Wins, Good luck Next time!!!.") ;
        }
        else {
            alert("scissors win"  + " " + "Your the Winner, nice job!") ;
        }
    }


}

