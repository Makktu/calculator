"use strict";

function buttonClicked() {
    // get value of button
    currentBtnPress = this.innerHTML;
    // if numerical, add number to display number
    if (this.classList.contains("num")) {
        if (displayNum.length < 8) {
            displayNum += currentBtnPress;
            displayArea.textContent = displayNum;
        }
    }

    if (currentBtnPress === "C") {
        displayArea.textContent = "0";
        sumArea.textContent = "";
        displayNum = "";
        number1 = 0;
        number2 = 0;
    }

    if (currentBtnPress === "+") {
        // lastOp = "add";

        if (!number1) {
            number1 = parseFloat(displayNum);
        } else {
            number1 += parseFloat(displayNum);
        }
        sumArea.textContent = number1 + "+";
        displayArea.textContent = "0";
        displayNum = "";
    }

    if (currentBtnPress === "-") {
        // lastOp = "minus";
        if (!number1) {
            number1 = parseFloat(displayNum);
        } else {
            number1 -= parseFloat(displayNum);
        }
        sumArea.textContent = number1 + "-";
        displayArea.textContent = "0";
        displayNum = "";
    }

    if (currentBtnPress === "=" && number1) {
        // lastOp = "equals";
        if (lastOp === "add") number2 = number1 + parseFloat(displayNum);
        if (lastOp === "minus") number2 = number1 - parseFloat(displayNum);
        if (lastOp === "mult") number2 = number1 * parseFloat(displayNum);
        if (lastOp === "divide") number2 = number1 / parseFloat(displayNum);

        sumArea.textContent = "";
        displayArea.textContent = number2;
        displayNum = number2;
    }
}

const displayArea = document.querySelector(".display");

displayArea.textContent = "0";

const sumArea = document.querySelector(".sum-display");

const allButtons = document.querySelectorAll(".btn");

// * define main variables

let rollingSum = 0;
let currentBtnPress;
let number1;
let number2;
let displayNum = "";
let lastOp;

allButtons.forEach((button) => button.addEventListener("click", buttonClicked));
