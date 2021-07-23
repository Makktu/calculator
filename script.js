"use strict";

// * ADD, SUBTRACT, MULTIPLY, DIVIDE

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// function opNumbers(a, b, op) {
//     if (op === "a" || op === "A") {
//         console.log(addNumbers(a, b));
//     } else if (op === "s" || op === "S") {
//         console.log(subtractNumbers(a, b));
//     } else if (op === "m" || op === "M") {
//         console.log(multiplyNumbers(a, b));
//     } else if (op === "d" || op === "D") {
//         console.log(divideNumbers(a, b));
//     }
// }

// let a = Number(prompt("Enter 1st number"));
// let b = Number(prompt("Enter 2nd number"));
// let op = prompt("Add, Subtract, Multiply, Divide? (A, S, M, D)");

// opNumbers(a, b, op);

//
// console.log(subtractNumbers(a, b));
//
// console.log(divideNumbers(a, b));

// attach event listeners to all buttons

function buttonClicked() {
    currentBtnPress = this.innerHTML;
    if (this.classList.contains("num")) {
        currentNumber += parseInt(currentBtnPress);
        displayArea.textContent = currentNumber;
    } else if (currentBtnPress === "C") {
        displayArea.textContent = "";
        sumArea.textContent = "";
        currentNumber = "";
    } else if (this.classList.contains("operator") && currentNumber !== "") {
        goFunc = this.id;
        window[goFunc](sumInProgress, currentNumber);

        sumInProgress += currentNumber;
        currentNumber = "";
        sumInProgress += currentBtnPress;
        displayArea.textContent = "";
        sumArea.textContent = sumInProgress;
    } else {
        calcSum(sumInProgress);
    }
}

function calcSum(sum) {
    // parse the sum in progress!
}

const displayArea = document.querySelector(".display");

const sumArea = document.querySelector(".sum-display");

const allButtons = document.querySelectorAll(".btn");

let currentNumber = "";
let sumInProgress = "";
let goFunc;
let currentBtnPress;

let currentOperator = "";

allButtons.forEach((button) => button.addEventListener("click", buttonClicked));
