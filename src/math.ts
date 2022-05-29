function add(num1: number, num2: number) {
    return (num1 + num2);
}

function subtract(num1: number, num2: number) {
    return (num1 - num2);
}

function multiply(num1: number, num2: number) {
    return (num1 * num2);
}

function divide(num1: number, num2: number) {
    return (num1 / num2);
}

function operate(operator: string, num1: number, num2: number) {
    switch (operator) {
        case 'add':
            return(add(num1, num2));
        case 'subtract':
            return(subtract(num1, num2));
        case 'multiply':
            return(multiply(num1, num2));
        case 'divide':
            return(divide(num1, num2));
    }
}


// input two numbers to concatenate instead of add
// ex: 4, 5 returns '45' (as a number)
function concatenate(digit1: number, digit2: number) {
    let numStr = ("" + digit1 + digit2);
    return parseInt(numStr);
}

export {
    operate, concatenate,
}