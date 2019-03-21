var n;

function rock() {

    n = Math.random();
    n = Math.floor(n * 3) + 1;
    document.getElementById("myChoice").innerHTML = "<image src=\"images/rock.png\"></image>";
    var computerResult = computerChoice();
    jude("rock", computerResult);

}

function scissors() {

    n = Math.random();
    n = Math.floor(n * 3) + 1;

    document.getElementById("myChoice").innerHTML = "<image src=\"images/scissors.png\"></image>";
    var computerResult = computerChoice();
    jude("scissors", computerResult);

}

function paper() {

    n = Math.random();
    n = Math.floor(n * 3) + 1;
    document.getElementById("myChoice").innerHTML = "<image src=\"images/paper.png\"></image>";
    var computerResult = computerChoice();
    jude("paper", computerResult);

}

function jude(myChoice, computerResult) {
    if (myChoice == "rock") {
        if (computerResult == "rock") {
            document.getElementById("result").innerHTML = "draw";
        } else if (computerResult == "scissors") {
            document.getElementById("result").innerHTML = "win";

        } else if (computerResult == "paper") {
            document.getElementById("result").innerHTML = "lose";
        }

    } else if (myChoice == "scissors") {
        if (computerResult == "scissors") {
            document.getElementById("result").innerHTML = "draw";
        } else if (computerResult == "paper") {
            document.getElementById("result").innerHTML = "win";

        } else if (computerResult == "rock") {
            document.getElementById("result").innerHTML = "lose";
        }

    } else if (myChoice == "paper") {
        if (computerResult == "paper") {
            document.getElementById("result").innerHTML = "draw";
        } else if (computerResult == "rock") {
            document.getElementById("result").innerHTML = "win";

        } else if (computerResult == "scissors") {
            document.getElementById("result").innerHTML = "lose";
        }

    }
}

function go() {

}

function computerChoice() {
    if (n == 1) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
        return "rock";

    } else if (n == 2) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/scissors.png'></image>";
        return "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<image src='images/paper.png'></image>";
        return "paper";
    }
}