var n, score = 0, grade = 1, lastHumanChoice;// score积分 grade关卡
var isComputerWin = false, lastComputerChoice = "rock";

function rock() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/rock.png\"></image>";
    jude("rock");
    lastHumanChoice = "rock";
}

function scissors() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/scissors.png\"></image>";
    jude("scissors");
    lastHumanChoice = "scissors";
}

function paper() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/paper.png\"></image>";
    jude("paper");
    lastHumanChoice = "paper";
}

function jude(myChoice) {
    n = Math.random();
    n = Math.floor(n * 3) + 1;
    var computerResult;
    if (grade == 1) {//第一关电脑只出锤
        computerResult = onlyRocker();

    } else if (grade == 2) {//第二关电脑模仿人类上一局
        computerResult = learnFormHuman();
    } else if (grade == 3) {//第三关电脑赢了会再出招
        computerResult = winnerAgain();
        lastComputerChoice=computerResult;
    }
    else {
        computerResult = computerChoice();
    }

    if (myChoice == "rock") {
        if (computerResult == "rock") {
            score += 0;
            isComputerWin = false;
        } else if (computerResult == "scissors") {
            score += 1;
            isComputerWin = false;
        } else if (computerResult == "paper") {
            score += -1;
            isComputerWin = true;
        }

    } else if (myChoice == "scissors") {
        if (computerResult == "scissors") {
            score += 0;
            isComputerWin = false;
        } else if (computerResult == "paper") {
            score += 1;
            isComputerWin = false;
        } else if (computerResult == "rock") {
            score += -1;
            isComputerWin = true;
        }

    } else if (myChoice == "paper") {
        if (computerResult == "paper") {
            // document.getElementById("result").innerHTML = "draw";
            score += 0;
            isComputerWin = false;
        } else if (computerResult == "rock") {
            // document.getElementById("result").innerHTML = "win";
            score += 1;
            isComputerWin = false;

        } else if (computerResult == "scissors") {
            // document.getElementById("result").innerHTML = "lose";
            score += -1;
            isComputerWin = true;
        }

    }
    document.getElementById("result").innerHTML = "第" + grade + "关，积分:" + score;
    if (score >= 5) {
        score = 0;
        grade++;
    }
    if (grade >= 10) {
        document.getElementById("result").innerHTML = "恭喜您总通关了";
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

function onlyRocker() {
    document.getElementById("computerName").innerHTML = "电脑大锤哥";
    document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
    return "rock";

}


function learnFormHuman() {
    document.getElementById("computerName").innerHTML = "模仿帝";
    document.getElementById("computerChoice").innerHTML = "<image src='images/" + lastHumanChoice + ".png'></image>";
    return lastHumanChoice;

}

function winnerAgain() {
    document.getElementById("computerName").innerHTML = "赢了还出";
    if (isComputerWin) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/" + lastComputerChoice + ".png'></image>";
        return lastComputerChoice;
    }else{
        var temp = computerChoice();
        document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
        return temp;
    }



}