function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator)
    {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            console.error("Invalid operator");
    }
}

function updateBottomScreen(e) {
    waitForNum2 = false;
    if(screen.textContent === "0")
        screen.textContent = "";
        
    screen.textContent = screen.textContent.concat(`${e.target.textContent}`);
    screenValue = Number(screen.textContent);
}

function updateTopScreen(num) {
    num = parseFloat(num.toFixed(3));
    operator !== "="
    ? operation.textContent = `${num} ${operator} `
    : operation.textContent = operation.textContent + `${num} =`;
}

function resetEverything() {
    screen.textContent = "0";
    operation.textContent = "0";
    num1 = 0;
    num2 = 0;
    operator = null;
    screenValue = 0;
}




let num1 = 0, num2 = 0;
let operator = null;

const screen = document.querySelector(".screen");
const operation = document.querySelector(".operation");
let screenValue = 0;
let waitForNum2 = false;

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener("click", updateBottomScreen)
});


const operators = document.querySelectorAll(".operator")
operators.forEach(op => {
    op.addEventListener("click", (e) => {
        if(screen.textContent === "0")
            return;

        if(operator !== null)
        {
            num2 = screenValue;
            num1 = operate(num1, num2, operator);
        }
        else 
            num1 = screenValue;
        
        operator = e.target.textContent;
        updateTopScreen(num1)
        screen.textContent = "0";
        waitForNum2 = true;
    })
})

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if(operator === null || waitForNum2)
        return;
    
    num2 = screenValue;
    let result = operate(num1, num2, operator)
    result = parseFloat(result.toFixed(3));
    screen.textContent = `${result}`;
    operator = "="
    updateTopScreen(num2);
    operator = null;
    screenValue = result;
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", resetEverything)

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    if(screen.textContent.includes("."))
        return;
    
    screen.textContent = screen.textContent.concat(".");
    screenValue = Number(screen.textContent);
})

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    if(screen.textContent === "0")
        return;

    screen.textContent = screen.textContent.slice(0, -1);

    if(screen.textContent === "")
        screen.textContent = "0";
    
    screenValue = Number(screen.textContent);
})