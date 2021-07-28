"use strict";

const numberClicked = () => {
    //stuff
    console.log(currentBtnPress);
    number1 += currentBtnPress;
    if (number1.length > 54) return; // refuse more input if screen full
    if (number1.length > 9) {
        // change screen font size if input number grows too large
        displayArea.style.fontSize = "1rem";
    }
    displayArea.textContent = number1;
};

const deleteClicked = () => {
    //stuff
};

const addClicked = (a, b) => {
    if (number2) {
        displayResult = parseFloat(number1) + parseFloat(number2);
        displayArea.textContent = displayResult;
        sumArea.textContent = displayResult;
        number1 = ""; // leaving the sum always stored in number2
    } else {
        sumArea.textContent = number1;
        displayArea.textContent = "+";
        // if (number2) return a + b;
        number2 = number1;
        number1 = "";
    }
};

const subtractClicked = () => {
    //stuff
};

const multiplyClicked = () => {
    //stuff
};

const divideClicked = () => {
    //stuff
};

const equalsClicked = () => {
    //stuff
};

const c_clicked = () => {
    displayArea.textContent = "";
    sumArea.textContent = "";
    currentBtnPress = "";
    number1 = "";
    number2 = "";
    lastOp = "";
    sumString = "";
    displayResult = "";
};

const printSumstring = (sumString) => {
    if (sumString.length > 25) {
        sumArea.style.fontSize = ".75rem";
    }
    sumArea.textContent = sumString;
};

const displayThis = (number2) => {
    //stuff
};

function plusMinus() {
    //stuff
}

function buttonClicked() {
    currentBtnPress = this.innerHTML;
    // operator = this.id;
    if (this.classList.contains("num")) numberClicked();
    if (this.classList.contains("plus-minus")) plusMinus();
    if (currentBtnPress === "DEL") deleteClicked();
    if (currentBtnPress === "C") c_clicked();

    if (currentBtnPress === "+") {
        if (number1 === "") {
            return;
        } else addClicked();
    }

    if (currentBtnPress === "-") {
        if (number1 === "") {
            return;
        } else subtractClicked();
    }

    if (currentBtnPress === "*") {
        if (number1 === "") {
            return;
        } else multiplyClicked();
    }

    if (this.classList.contains("divide")) {
        if (number1 === "") {
            return;
        } else divideClicked();
    }

    if (currentBtnPress === "=" && number2) equalsClicked();
}

const displayArea = document.querySelector(".display");
displayArea.textContent = "0";

const sumArea = document.querySelector(".sum-display");

const allButtons = document.querySelectorAll(".btn");
allButtons.forEach((button) => button.addEventListener("click", buttonClicked));

let currentBtnPress;
let number1 = "";
let number2 = "";
let lastOp = "";
let sumString = "";
let displayResult;
// let operator = null;
