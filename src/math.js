"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenate = exports.operate = void 0;
function add(num1, num2) {
    return (num1 + num2);
}
function subtract(num1, num2) {
    return (num1 - num2);
}
function multiply(num1, num2) {
    return (num1 * num2);
}
function divide(num1, num2) {
    if (divide0test(num2)) {
        return 'Divide by 0 error';
    }
    return (num1 / num2);
}
function divide0test(divisor) {
    if (divisor === 0) {
        return true;
    }
    return false;
}
function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return (add(num1, num2));
        case 'subtract':
            return (subtract(num1, num2));
        case 'multiply':
            return (multiply(num1, num2));
        case 'divide':
            return (divide(num1, num2));
    }
}
exports.operate = operate;
// input two numbers to concatenate instead of add
// ex: 4, 5 returns '45' (as a number)
function concatenate(digit1, digit2) {
    let numStr = ("" + digit1 + digit2);
    return parseInt(numStr);
}
exports.concatenate = concatenate;
