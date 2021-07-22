"use strict";

// * ADD, SUBTRACT, MULTIPLY, DIVIDE

const addNumbers = (a, b) => a + b;
const subtractNumbers = (a, b) => a - b;
const multiplyNumbers = (a, b) => a * b;
const divideNumbers = (a, b) => a / b;

function opNumbers(a, b, op) {
    if (op === "a" || op === "A") {
        console.log(addNumbers(a, b));
    } else if (op === "s" || op === "S") {
        console.log(subtractNumbers(a, b));
    } else if (op === "m" || op === "M") {
        console.log(multiplyNumbers(a, b));
    } else if (op === "d" || op === "D") {
        console.log(divideNumbers(a, b));
    }
}

let a = Number(prompt("Enter 1st number"));
let b = Number(prompt("Enter 2nd number"));
let op = prompt("Add, Subtract, Multiply, Divide? (A, S, M, D)");

opNumbers(a, b, op);

//
// console.log(subtractNumbers(a, b));
//
// console.log(divideNumbers(a, b));
