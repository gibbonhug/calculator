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
    if (divide0test(num2)) {
        return 'Divide by 0 error';
    }
    return (num1 / num2);
}

function divide0test(divisor: number) {
    if (divisor === 0) {
        return true;
    }
    return false;
}

function operate(operator: string, num1: number, num2: number) {
    switch (operator) {
        case '+':
            return(add(num1, num2));
        case '-':
            return(subtract(num1, num2));
        case '×': // multiplication sign , not letter x
            return(multiply(num1, num2));
        case '÷':
            return(divide(num1, num2));
    }
}

// input two numbers to concatenate instead of add
// ex: 4, 5 returns '45' (as a number)
function concatenate(digit1: number, digit2: number) {
    let numStr = ("" + digit1 + digit2);
    return Number(numStr);
}


export {
    operate, concatenate,
}