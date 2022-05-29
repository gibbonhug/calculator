"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// set inner text (done here bc using getElem):
(0, function_1.getElem)('btnAdd').innerText = 'Add';
(0, function_1.getElem)('btnSubtract').innerText = 'Subtract';
(0, function_1.getElem)('btnMultiply').innerText = 'Multiply';
(0, function_1.getElem)('btnDivide').innerText = 'Divide';
// create result, display, and clear btns:
const resultBtns = (0, function_1.createSimilarElems)('button', 1, ['resultBtn', 'calcBtn'], 'btnEquals', 'btnDisplay', 'btnClear');
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('resultDiv'), resultBtns);
// set inner text (none for display):
(0, function_1.getElem)('btnEquals').innerText = 'Equals';
(0, function_1.getElem)('btnClear').innerText = 'Clear';
// init num variables:
let num1 = undefined;
let num2 = undefined;
// when clicking a number button (data is of str type):
function setNum(num) {
    // we have not set our first number yet, so we set it:
    if (num1 === undefined) {
        num1 = num;
    }
    else { // we set our second number if already sat first
        num2 = num;
    }
}
// display the number received from setNum in the display btn (usually clear)
function displayNum(num) {
    (0, function_1.getElem)('btnDisplay').innerText = num.toString();
}
// add our event listeners to set and display nums:
numBtns.forEach((btn) => {
    let dataStr = btn.dataset.num; // retrieve info from dataset
    let dataNum = parseInt(dataStr); // cast it to num
    btn.addEventListener('click', () => {
        setNum(dataNum);
        displayNum(dataNum);
    });
});
// clear our number data and set the 'display' to blank
function clear() {
    num1 = undefined;
    num2 = undefined;
    (0, function_1.getElem)('btnDisplay').innerText = '';
}
// event listener to clear button, to clear:
(0, function_1.getElem)('btnClear').addEventListener('click', () => {
    clear();
});
