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

// create result, display, and clear btns:
const resultBtns = createSimilarElems('button', 1, ['resultBtn', 'calcBtn'], 'btnEquals', 'btnDisplay', 'btnClear');
// append:
appendSiblings(getElem('resultDiv'), resultBtns);
// set inner text (none for display):
getElem('btnEquals').innerText = 'Equals';
getElem('btnClear').innerText = 'Clear';


// init num variables:
let num1: number | undefined = undefined;
let num2: number | undefined = undefined;


// when clicking a number button (data is of str type):
function setNum(num: number) {
    // we have not set our first number yet, so we set it:
    if (num1 === undefined) {
        num1 = num;
    } else { // we set our second number if already sat first
        num2 = num;
    }
}

// display the number received from setNum in the display btn (usually clear)
function displayNum(num: number) {
    const btnDisplay = getElem('btnDisplay');
    btnDisplay.innerText = num.toString();
}

// add our event listeners to set and display nums:
numBtns.forEach((btn: HTMLElement) => {
    let dataStr: string = btn.dataset.num!; // retrieve info from dataset
    let dataNum: number = parseInt(dataStr); // cast it to num

    btn.addEventListener('click', () => {
        console.log('dataNum:');
        console.log(dataNum);
        setNum(dataNum);
        displayNum(dataNum);
    });
});