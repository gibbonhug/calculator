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
// create result and etc btns:
const resultBtns = (0, function_1.createSimilarElems)('button', 1, ['resultBtn', 'calcBtn'], 'btnResult', 'btnDisplay', 'btnClear');
// append:
(0, function_1.appendSiblings)((0, function_1.getElem)('resultDiv'), resultBtns);
// set inner text:
(0, function_1.getElem)('btnResult').innerText = 'Result';
(0, function_1.getElem)('btnClear').innerText = 'Clear';
// init num variables:
let num1 = undefined;
let num2 = undefined;
// when clicking a number button (data is of str type):
function setNum(numData) {
    let num = parseInt(numData);
    // we have not set our first number yet, so we set it:
    if (num1 == undefined) {
        num1 = num;
    }
    else { // we set our second number if already sat first
        num2 = num;
    }
}
