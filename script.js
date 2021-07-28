"use strict";

const numberClicked = () => {
    //stuff
    console.log(currentBtnPress);
};

const deleteClicked = () => {
    //stuff
};

const addClicked = () => {
    //stuff
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
    //stuff
};

const printSumstring = (sumString) => {
    //stuff
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
let number1 = null;
let number2 = null;
let lastOp = null;
let sumString = null;
// let operator = null;
let truNum = null;
