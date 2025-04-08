const input = document.querySelector("input");

//identifying number buttons

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const decimal = document.querySelector(".decimal");

//identifying operator buttons

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

//identifying special buttons that aren't the four operators

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".deleteButton");


//number buttons' event listeners

zero.addEventListener("click", () => {
    input.value += "0";
});

one.addEventListener("click", () => {
    input.value += "1";
});

two.addEventListener("click", () => {
    input.value += "2";
});

three.addEventListener("click", () => {
    input.value += "3";
});

four.addEventListener("click", () => {
    input.value += "4";
});

five.addEventListener("click", () => {
    input.value += "5";
});

six.addEventListener("click", () => {
    input.value += "6";
});

seven.addEventListener("click", () => {
    input.value += "7";
});

eight.addEventListener("click", () => {
    input.value += "8";
});

nine.addEventListener("click", () => {
    input.value += "9";
});

decimal.addEventListener("click", () => {
    input.value += ".";
});

//variable declarations for later calculation

let number1 = 0;

let number1Chosen = false;

let operator = "";

let operatorChosen = false;

let number2 = 0;

let result = 0;

//operator buttons' event listeners

function operatorClick(symbol) {
    number1 = parseFloat(input.value);
    number1Chosen = true;
    operator = symbol;
    operatorChosen = true;
    input.value = "";
};

add.addEventListener("click", () => operatorClick("+"));

minus.addEventListener("click", () => operatorClick("-"));

divide.addEventListener("click", () => operatorClick("/"));

multiply.addEventListener("click", () => operatorClick("*"));

//special buttons' event listeners

clear.addEventListener("click", () => {
    number1 = 0;
    number2 = 0;
    number1Chosen = false;
    operator = "";
    operatorChosen = false;
    input.value = "";
});

deleteButton.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});

//calculation upon clicking '='

function calculate(number1, number2, operator) {
    if (operator == "+") {
        result = number1 + number2;
    }

    else if (operator == "-") {
        result = number1 - number2;
    }

    else if (operator == "*") {
        result = number1 * number2;
    }

    else if (operator == "/" && number2 !== 0) {
        result = number1 / number2;
    }

    else if (operator == "/" && number2 == 0) {
        result = "Error. Press clear to reset.";
    }
    return result;
};

equals.addEventListener("click", () => {
    
    if ((number1Chosen === false) || (operatorChosen === false)) {
        return;
    }

    else {
    number2 = parseFloat(input.value);
    result = calculate(number1,number2,operator);
    input.value = result;
    number1 = result;
    operatorChosen = false;
    };
});