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

let num1 = 0, num2 = 0;
let operator = null;

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

const screen = document.querySelector(".screen");
let screenValue = "";
updateScreen();




function updateScreen() {
    const numbers = document.querySelectorAll(".number");

    numbers.forEach(number => {
        number.addEventListener("click", (e) => {
            //console.log(e);
            screen.textContent = screen.textContent.concat(`${e.target.textContent}`);
        })
    });
}

