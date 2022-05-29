import {
    operate,
} from './math'

import {
    appendSiblings, addClasses, removeClasses, toggleClasses, createSimilarElems, isPositiveInteger, clearInnerText, setInnerText, getElem,
} from './function'

import './style.css';

// create 0-9 buttons:
const numBtns = createSimilarElems('button', 0, ['numBtn', 'calcBtn'], 
        'btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7',
        'btn8', 'btn9');
// set the text to be 0-9, and add data:
for (let i = 0; i <= 9; i++) {
    numBtns[i].innerText = i.toString();
    numBtns[i].dataset.num = i.toString();
}
// append the 0-9 buttons:
appendSiblings(getElem('numDiv'), numBtns);

// create the function(operator) btns:
const funcBtns = createSimilarElems('button', 0, ['funcBtn', 'calcBtn'], 'btnAdd', 'btnSubtract', 'btnMultiply', 'btnDivide');
// append the func btns:
appendSiblings(getElem('funcDiv'), funcBtns);
// set inner text (done here bc using getElem):
    getElem('btnAdd').innerText = 'Add';
    getElem('btnSubtract').innerText = 'Subtract';
    getElem('btnMultiply').innerText = 'Multiply';
    getElem('btnDivide').innerText = 'Divide';


// create result and etc btns:
const resultBtns = createSimilarElems('button', 1, ['resultBtn', 'calcBtn'], 'btnResult', 'btnDisplay', 'btnClear');
// append:
appendSiblings(getElem('resultDiv'), resultBtns);
// set inner text:
getElem('btnResult').innerText = 'Result';
getElem('btnClear').innerText = 'Clear';


// init num variables:
let num1: number | undefined = undefined;
let num2: number | undefined = undefined;


// when clicking a number button (data is of str type):
function setNum(numData: string) {
    let num: number = parseInt(numData);
    // we have not set our first number yet, so we set it:
    if (num1 !== undefined) {
        num1 = num;
    } else { // we set our second number if already sat first
        num2 = num;
    }
}