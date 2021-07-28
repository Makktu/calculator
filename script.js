"use strict";

const numberClicked = () => {
    // if 'displayNum' is less than the screen size, we add the entry to the number visible; if not less, nothing happens.
    if (number1.length < 9) {
        number1 += currentBtnPress;
        displayArea.textContent = number1;
        // lastOp = "num";
    }
};

const deleteClicked = () => {
    if (number1.length > 0) {
        number1 = number1.substring(0, number1.length - 1);
        displayArea.textContent = number1;
    }
};

const addClicked = () => {
    if (lastOp === "subtract") {
        console.log("making it work?");
        sumString += parseFloat(number1) + " + ";
        lastOp = "subtract";
        printSumstring(sumString);
        number2
            ? (number2 = parseFloat(number2) - parseFloat(number1))
            : (number2 = parseFloat(number1));

        displayThis(number2);

        printSumstring(sumString);
        lastOp = "subtract";
        number1 = "";
        return;
    }

    if (lastOp !== "equals") {
        sumString += parseFloat(number1) + " + ";
        lastOp = "add";
    } else if (lastOp === "equals") {
        sumString = parseFloat(number1) + " + ";
        printSumstring(sumString);
        displayArea.textContent = number1;
        lastOp = "add";
        number1 = "";
        return;
    }

    number2
        ? (number2 = parseFloat(number2) + parseFloat(number1))
        : (number2 = parseFloat(number1));

    displayThis(number2);

    printSumstring(sumString);
    lastOp = "add";
    number1 = "";
};

const subtractClicked = () => {
    if (lastOp !== "equals") {
        sumString += parseFloat(number1) + " - ";
        lastOp = "subtract";
        printSumstring(sumString);
    } else if (lastOp === "equals") {
        sumString = parseFloat(number1) + " - ";
        printSumstring(sumString);
        displayArea.textContent = number1;
        lastOp = "subtract";
        number1 = "";
        return;
    }
    number2
        ? (number2 = parseFloat(number2) - parseFloat(number1))
        : (number2 = parseFloat(number1));

    displayThis(number2);

    printSumstring(sumString);
    lastOp = "subtract";
    number1 = "";
};

const multiplyClicked = () => {
    if (lastOp !== "equals") {
        sumString += parseFloat(number1) + " * ";
        lastOp = "multiply";
        printSumstring(sumString);
    } else if (lastOp === "equals") {
        sumString = parseFloat(number1) + " * ";
        printSumstring(sumString);
        displayArea.textContent = number1;
        lastOp = "multiply";
        number1 = "";
        return;
    }
    number2
        ? (number2 = parseFloat(number2) * parseFloat(number1))
        : (number2 = parseFloat(number1));

    displayThis(number2);

    printSumstring(sumString);
    lastOp = "multiply";
    number1 = "";
};

const divideClicked = () => {
    if (lastOp !== "equals") {
        sumString += parseFloat(number1) + " ÷ ";
        lastOp = "divide";
        printSumstring(sumString);
    } else if (lastOp === "equals") {
        sumString = parseFloat(number1) + " ÷ ";
        printSumstring(sumString);
        displayArea.textContent = number1;
        lastOp = "divide";
        number1 = "";
        return;
    }
    number2
        ? (number2 = parseFloat(number2) / parseFloat(number1))
        : (number2 = parseFloat(number1));

    displayThis(number2);

    printSumstring(sumString);
    lastOp = "divide";
    number1 = "";
};

const equalsClicked = () => {
    if (lastOp === "equals") return;
    if (number2) {
        if (lastOp === "add")
            number2 = parseFloat(number2) + parseFloat(number1);
        if (lastOp === "subtract")
            number2 = parseFloat(number2) - parseFloat(number1);
        if (lastOp === "multiply")
            number2 = parseFloat(number2) * parseFloat(number1);
        if (lastOp === "divide")
            number2 = parseFloat(number2) / parseFloat(number1);

        displayThis(number2);
        sumString += parseFloat(number1) + " = " + parseFloat(number2);

        printSumstring(sumString);

        // lastButOneOp = lastOp;

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
    displayArea.style.cssText = "font-size: 2rem;";

    // number2 = 0;
    // lastOp = "";
};

const printSumstring = (sumString) => {
    if (sumString.length > 26) {
        sumString =
            "..." +
            sumString.substring(sumString.length - 26, sumString.length);
        sumArea.style.cssText = "font-size: .75rem;";

        sumArea.textContent = sumString;
        return;
    }

    if (sumString.length > 15) {
        sumArea.style.cssText = "font-size: .75rem;";
        sumArea.textContent = sumString;
        return;
    }

    if (sumString.length < 16) {
        sumArea.textContent = sumString;
        return;
    }
};

const displayThis = (number2) => {
    let whatNumLen = number2.toString();
    if (whatNumLen.length > 9) {
        displayArea.style.cssText = "font-size: 1.5rem;";
        displayArea.textContent = parseFloat(number2.toFixed(2));
    } else {
        displayArea.style.cssText = "font-size: 2rem;";
        displayArea.textContent = parseFloat(number2.toFixed(2));
    }
};

function plusMinus() {
    if (number1 === "") {
        return;
    } else {
        if (number1.startsWith("-")) {
            number1 = number1.substring(1);
            console.log(number1);
            displayArea.textContent = number1;
        } else {
            number1 = "-" + number1;
            displayArea.textContent = number1;
        }
    }
}

function buttonClicked() {
    currentBtnPress = this.innerHTML;
    operator = this.id;
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
let lastOp = "";
let sumString = "";
let operator;
let truNum;
