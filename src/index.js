"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const function_1 = require("./function");
require("./style.css");
// create 0-9 buttons:
const numBtns = (0, function_1.createSimilarElems)('button', 0, ['numBtn', 'calcBtn'], 'btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9');
// set the text to be 0-9, and add data:
for (let i = 0; i <= 9; i++) {
    numBtns[i].innerText = i.toString();
    numBtns[i].dataset.num = i.toString();
}
// append the 0-9 buttons:
(0, function_1.appendSiblings)((0, function_1.getElem)('numDiv'), numBtns);
// create the function(operator) btns:
const funcBtns = (0, function_1.createSimilarElems)('button', 0, ['funcBtn', 'calcBtn'], 'btnAdd', 'btnSubtract', 'btnMultiply', 'btnDivide');
// append the func btns:
(0, function_1.appendSiblings)((0, function_1.getElem)('funcDiv'), funcBtns);
// set inner text (done here bc using getElem), and set data:
(0, function_1.getElem)('btnAdd').innerText = 'Add';
(0, function_1.getElem)('btnAdd').dataset.operator = 'add';
(0, function_1.getElem)('btnSubtract').innerText = 'Subtract';
(0, function_1.getElem)('btnSubtract').dataset.operator = 'subtract';
(0, function_1.getElem)('btnMultiply').innerText = 'Multiply';
(0, function_1.getElem)('btnMultiply').dataset.operator = 'multiply';
(0, function_1.getElem)('btnDivide').innerText = 'Divide';
(0, function_1.getElem)('btnDivide').dataset.operator = 'divide';
// create result, display, and clear btns:
const resultBtns = (0, function_1.createSimilarElems)('button', 1, ['resultBtn', 'calcBtn'], 'btnEquals', 'btnDisplay', 'btnClear');
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('resultDiv'), resultBtns);
// set inner text (none for display):
(0, function_1.getElem)('btnEquals').innerText = 'Equals';
(0, function_1.getElem)('btnClear').innerText = 'AC';
// init num and operator variables:
let num1 = undefined;
let num2 = undefined;
let operator = undefined;
// when clicking a number button (data is of str type):
function setNum(num) {
    // we have not set our first number yet, so we set it:
    if (num1 === undefined && operator == undefined) {
        num1 = num;
        return num1; // for display func
    }
    else if (operator == undefined) { // we are still typing in our first num
        // (we concatenate input because that is how 'real' calculators work)
        num1 = (0, math_1.concatenate)(num1, num);
        return num1;
    }
    else if (num2 == undefined) { // we have set our operator, and now first dig of num2
        num2 = num;
        return num2;
    }
    else { // we have already set first digit of num2, and concatenate more
        num2 = (0, math_1.concatenate)(num2, num);
        return num2;
    }
}
// when clicking an operator (+, - etc) button
function setOperator(str) {
    if (num1 == undefined) { // we havent' set our first num yet, so we do nothing
        return;
    }
    else {
        operator = str;
        return operator;
    }
}
// add our event listeners to set and display nums:
numBtns.forEach((btn) => {
    let dataStr = btn.dataset.num; // retrieve info from dataset
    let dataNum = parseInt(dataStr); // cast it to num
    btn.addEventListener('click', () => {
        let currentNum = setNum(dataNum);
        display(currentNum);
    });
});
// add our event listeners to set our operators (+,- etc btns):
funcBtns.forEach((btn) => {
    let operator = btn.dataset.operator; // retrieve info from dataset
    btn.addEventListener('click', () => {
        setOperator(operator);
        display(operator);
    });
});
// event listener to equals btn, which uses current operator on nums:
(0, function_1.getElem)('btnEquals').addEventListener('click', () => {
    // if any of these are undefined, we do not do anything:
    if (typeof num1 == undefined || typeof num2 == undefined || typeof operator == undefined) {
        console.log('hi');
        display('mess up');
    }
    else {
        let result = (0, math_1.operate)(operator, num1, num2);
        display(result);
    }
});
// add event listener to AC button:
(0, function_1.getElem)('btnClear').addEventListener('click', () => {
    clearAll();
});
// display the number received from setNum or setOperator in the display btn (usually clear)
function display(input) {
    (0, function_1.getElem)('btnDisplay').innerText = input.toString();
}
function clearAll() {
    clearData();
    clearDisplay();
}
// for entering new equations
function clearData() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}
// set the 'display' to blank
function clearDisplay() {
    (0, function_1.getElem)('btnDisplay').innerText = '';
}
