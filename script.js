const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

let currentInput = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        setDisplayValue(currentInput);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (currentOperator) {
            secondOperand = parseFloat(currentInput);
            firstOperand = operate(firstOperand, secondOperand, currentOperator);
            setDisplayValue(firstOperand);
        }
        currentOperator = button.textContent;
        currentInput = "";
    });
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    setDisplayValue("");
});

equalsButton.addEventListener("click", () => {
    if (firstOperand !== null && currentOperator !== null) {
        secondOperand = parseFloat(currentInput);
        const result = operate(firstOperand, secondOperand, currentOperator);
        setDisplayValue(result);
        firstOperand = result;
        currentInput = "";
        currentOperator = null;
    }
});

function getDisplayValue() {
    return display.textContent;
}

function setDisplayValue(value) {
    display.textContent = value;
}

function minus(x, y) {
    return x - y;
}

function plus(x, y) {
    return x + y;
}

function times(x, y) {
    return x * y;
}

function divise(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    switch (operator) {
        case "-":
            return minus(x, y);
        case "+":
            return plus(x, y);
        case "*":
            return times(x, y);
        case "/":
            return divise(x, y);
        default:
            return null;
    }
}
