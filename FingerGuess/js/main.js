var n, score = 0, grade = 1, lastHumanChoice, humanChoice;// score积分 grade关卡
var lastwinner = "none", lastComputerChoice = "rock";

function rock() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/rock.png\"></image>";
    humanChoice = "rock";
    jude("rock");
    lastHumanChoice = "rock";
}

function scissors() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/scissors.png\"></image>";
    humanChoice = "scissors";
    jude("scissors");
    lastHumanChoice = "scissors";
}

function paper() {
    document.getElementById("myChoice").innerHTML = "<image src=\"images/paper.png\"></image>";
    humanChoice = "paper";
    jude("paper");
    lastHumanChoice = "paper";
}

function jude(myChoice) {
    n = Math.random() * 3;
    var computerResult;
    if (grade == 1) {//第一关电脑只出锤
        computerResult = onlyRocker();
    } else if (grade == 2) {//第二关电脑模仿人类上一局
        computerResult = learnFormHuman();
    } else if (grade == 3) {//第三关电脑赢了会再出招
        computerResult = winnerAgain();
        lastComputerChoice = computerResult;
    } else if (grade == 4) {//第四关电脑输了会换
        computerResult = loseChange();
        lastComputerChoice = computerResult;
    } else if (grade == 5) {//第五关电脑倾向于出步
        computerResult = lovePaper();
    } else if (grade == 6) {//电脑随机
        computerResult = randromComputer();
    } else if (grade == 7) {//电脑有一般概率作弊
        computerResult = cheatingComputer(humanChoice);
    }

    if (myChoice == "rock") {
        if (computerResult == "rock") {
            score += 0;
            lastwinner = "none";
        } else if (computerResult == "scissors") {
            score += 1;
            lastwinner = "human";
        } else if (computerResult == "paper") {
            score += -1;
            lastwinner = "computer";
        }

    } else if (myChoice == "scissors") {
        if (computerResult == "scissors") {
            score += 0;
            lastwinner = "none";
        } else if (computerResult == "paper") {
            score += 1;
            lastwinner = "human";
        } else if (computerResult == "rock") {
            score += -1;
            lastwinner = "computer";
        }

    } else if (myChoice == "paper") {
        if (computerResult == "paper") {
            // document.getElementById("result").innerHTML = "draw";
            score += 0;
            lastwinner = "none";
        } else if (computerResult == "rock") {
            // document.getElementById("result").innerHTML = "win";
            score += 1;
            lastwinner = "human";

        } else if (computerResult == "scissors") {
            // document.getElementById("result").innerHTML = "lose";
            score += -1;
            lastwinner = "computer";
        }

    }
    document.getElementById("result").innerHTML = "第" + grade + "关，积分:" + score;
    if (score >= 5) {
        score = 0;
        grade++;
    }
    if (grade > 7) {
        document.getElementById("result").innerHTML = "恭喜您总通关了";
    }
}

function go() {

}

function computerChoice() {
    n = 3 * Math.random();
    if (n < 1) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
        return "rock";

    } else if (n < 2) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/scissors.png'></image>";
        return "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<image src='images/paper.png'></image>";
        return "paper";
    }
}


function lovePaper() {

    var temp;
    if (n < 0.8) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
        temp = "rock";

    } else if (n < 1.2) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/scissors.png'></image>";
        temp = "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<image src='images/paper.png'></image>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML = "爱布先生";
    document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
    return temp;
}

function randromComputer() {
    n = 3 * Math.random();
    var temp;
    if (n < 1) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
        temp = "rock";

    } else if (n < 2) {
        document.getElementById("computerChoice").innerHTML = "<image src='images/scissors.png'></image>";
        temp = "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<image src='images/paper.png'></image>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML = "随机出招";
    document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
    return temp;
}

function cheatingComputer(humanChoice) {
    n = Math.random();
    document.getElementById("computerName").innerHTML = "作弊爷爷";
    if (humanChoice == "rock") {
        if (n < 0.5) {
            document.getElementById("computerChoice").innerHTML = "<image src='images/paper.png'></image>";
            return "paper";
        } else {
            return computerChoice();
        }


    } else if (humanChoice == "scissors") {
        if (n < 0.5) {
            document.getElementById("computerChoice").innerHTML = "<image src='images/rock.png'></image>";
            return "rock";
        } else {
            return computerChoice();
        }

    } else if (humanChoice == "paper") {
        if (n < 0.5) {
            document.getElementById("computerChoice").innerHTML = "<image src='images/scissors.png'></image>";
            return "scissors";
        } else {
            return computerChoice();
        }

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

    if (lastwinner == "computer") {
        document.getElementById("computerChoice").innerHTML = "<image src='images/" + lastComputerChoice + ".png'></image>";
        return lastComputerChoice;
    }

    var temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
    return temp;

}

function loseChange() {
    document.getElementById("computerName").innerHTML = "输了就换";
    var temp;
    if (lastwinner == "human") {//换掉
        temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
        return temp;
    }
    temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<image src='images/" + temp + ".png'></image>";
    return temp;
}

function getResultExclude(exclusion) {
    var temp = computerChoice();
    if (temp == exclusion) {
        return getResultExclude(exclusion);
    } else {
        return temp;
    }
}