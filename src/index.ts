import {
    operate, concatenate,
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

// create result, display, and clear btns:
const resultBtns = createSimilarElems('button', 1, ['resultBtn', 'calcBtn'], 'btnEquals', 'btnDisplay', 'btnClear');
// append:
appendSiblings(getElem('resultDiv'), resultBtns);
// set inner text (none for display):
getElem('btnEquals').innerText = 'Equals';
getElem('btnClear').innerText = 'AC';


// init num and operator variables:
let num1: number | undefined = undefined;
let num2: number | undefined = undefined;
let operator: string | undefined = undefined;


// when clicking a number button (data is of str type):
function setNum(num: number) {
    // we have not set our first number yet, so we set it:
    if (num1 === undefined && operator == undefined) {
        num1 = num;
        return num1; // for display func
    } else if (operator == undefined) { // we are still typing in our first num
        // (we concatenate input because that is how 'real' calculators work)
        num1 = concatenate(num1!, num);
        return num1;
    } else if (num2 == undefined) { // we have set our operator, and now first dig of num2
        num2 = num;
        return num2;
    } else { // we have already set first digit of num2, and concatenate more
        num2 = concatenate(num2!, num);
        return num2;
    }
}

// display the number received from setNum in the display btn (usually clear)
function displayNum(num: number) {
    getElem('btnDisplay').innerText = num.toString();
}

// add our event listeners to set and display nums:
numBtns.forEach((btn: HTMLElement) => {
    let dataStr: string = btn.dataset.num!; // retrieve info from dataset
    let dataNum: number = parseInt(dataStr); // cast it to num

    btn.addEventListener('click', () => {
        let currentNum: number = setNum(dataNum);
        displayNum(currentNum);
    });
});

function clearAll() {
    clearNumData();
    clearDisplay();
}

// for entering new equations
function clearNumData() {
    num1 = undefined;
    num2 = undefined;
}

// set the 'display' to blank
function clearDisplay() {
    getElem('btnDisplay').innerText = '';
}

// add event listener to clear button, to clear:
getElem('btnClear').addEventListener('click', () => {
    clearAll();
});

//  add event listeners for function buttons: