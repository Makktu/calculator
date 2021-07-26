"use strict";

const numberClicked = () => {
    // if 'displayNum' is less than the screen size, we add the entry to the number visible; if not less, nothing happens.
    if (number1.length < 8) {
        number1 += currentBtnPress;
        displayArea.textContent = number1;
    }
};

const deleteClicked = () => {
    if (number1.length > 0) {
        number1 = number1.substring(0, number1.length - 1);
        displayArea.textContent = number1;
    }
};

const addClicked = () => {
    if (lastOp !== "equals") {
        sumString += parseFloat(number1) + " + ";
    } else if (lastOp === "equals") {
        sumString = parseFloat(number1) + " + ";
        printSumstring(sumString);
        displayArea.textContent = number1;
        lastOp = "add";
        return;
    }
    number2
        ? (number2 = parseFloat(number2) + parseFloat(number1))
        : (number2 = parseFloat(number1));

    displayArea.textContent = parseFloat(number2);

    printSumstring(sumString);
    lastOp = "add";
    number1 = "";
};

const subtractClicked = () => {
    //stuff
};

const multiplyClicked = () => {
    // stuff
};

const divideClicked = () => {
    //stuff
};

const equalsClicked = () => {
    if (number2) {
        sumString += parseFloat(number1) + " = ";
        number2 = parseFloat(number2) + parseFloat(number1);
        displayArea.textContent = parseFloat(number2);

        printSumstring(sumString);
        lastOp = "equals";
        number1 = number2;
    }
};

const c_clicked = () => {
    sumArea.textContent = "";
    number1 = "";
    displayArea.textContent = "0";
    number2 = "";
    lastOp = "";
    sumString = "";
    // number2 = 0;
    // lastOp = "";
};

const printSumstring = (sumString) => {
    if (sumString.length > 22) {
        sumArea.style.cssText = "font-size: .75rem;";
    }

    if (sumString.length > 35) {
        sumString =
            "..." +
            sumString.substring(sumString.length - 35, sumString.length);
    }
    sumArea.textContent = sumString;
};

function buttonClicked() {
    currentBtnPress = this.innerHTML;
    // console.log(currentBtnPress, numberSum, displayNum);
    if (this.classList.contains("num")) numberClicked();
    if (currentBtnPress === "DEL") deleteClicked();
    if (currentBtnPress === "C") c_clicked();
    if (currentBtnPress === "+") addClicked();
    if (currentBtnPress === "-") subtractClicked();
    if (currentBtnPress === "*") multiplyClicked();
    if (this.classList.contains("divide")) divideClicked();
    if (currentBtnPress === "=" && number1) equalsClicked();
}

// * define the main display area – where the user entry will appear, and give it a default display of '0'
const displayArea = document.querySelector(".display");
displayArea.textContent = "0";

// * define the subsidiary display where the sum-in-progress details will appear
const sumArea = document.querySelector(".sum-display");

// * assign event listener to all buttons
const allButtons = document.querySelectorAll(".btn");
allButtons.forEach((button) => button.addEventListener("click", buttonClicked));

// * define main variables
let currentBtnPress;
let number1 = ""; // this will be the next number – the live number
let number2 = "";
// let displayNum = "";
let lastOp = "";
let sumString = "";
