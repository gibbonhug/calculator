import {
    operate, concatenate,
} from './math'

import {
    appendSiblings, removeClasses, createSimilarElems, getElem,
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
// set inner text (done here bc using getElem), and set data:
    getElem('btnAdd').innerText = '+';
    getElem('btnAdd').dataset.operator = '+';

    getElem('btnSubtract').innerText = '-';
    getElem('btnSubtract').dataset.operator = '-';

    getElem('btnMultiply').innerText = '×';
    getElem('btnMultiply').dataset.operator = '×';

    getElem('btnDivide').innerText = '÷';
    getElem('btnDivide').dataset.operator = '÷';

// create clear btn:
let settingsBtns = createSimilarElems('button', 1, ['settingsBtn', 'calcBtn'], 'btnClear');
// append:
appendSiblings(getElem('funcDiv'), settingsBtns);
// set inner text to 'AC' like on real calculator:
getElem('btnClear').innerText = 'AC';

// create equals btn:
let resultBtns = (createSimilarElems('button', 0, ['resultBtn', 'calcBtn'], 'btnEquals'));
// append:
appendSiblings(getElem('numDiv'), resultBtns);
// equals sign for the text:
getElem('btnEquals').innerText = '=';

// create the display:
        // create similar elems returns an arr, so we get the first elem, which is our div
let divDisplay = (createSimilarElems('div', 0, ['display'], 'divDisplay'))[0];
// append:
appendSiblings(getElem('displayContainer'), divDisplay);

// init num and operator variables:
// when these vars are 'undefined', usually it means user has hit AC button, or
        // for operator and num2, haven't entered anything yet
let num1: number | undefined = undefined; 
let num2: number | undefined = undefined;
let operator: string | undefined = undefined;


// when clicking a number button:
function setNum(num: number) {
    if (operator === undefined) { // we have not set our first number yet, so we set it:
        if (num1 === undefined) { // setting the first digit
            num1 = num;
        } else if (checkBelowMaxLength(num1!)) { // we are still typing in our first num
            num1 = concatenate(num1!, num);  // (concatenate input because that is how 'real' calculators work)
        } // if too long just stop letting add input, idk what normal calculators do?
        return num1;
        }
    // both the operator and all of num1 are defined if reach here:
    if (num2 == undefined) { // this is first/only dig of num2
        num2 = num;
    } else if (checkBelowMaxLength(num2!)) { // we have already set first digit of num2
        num2 = concatenate(num2!, num); // if too long, keep whatever 13 chars are (same logic)
    }
    return num2;
}

// want nums to be >= 13 chars to not overflow 'calculator screen'
function checkBelowMaxLength(num: number) {
    let numStr: string = num.toString();
    if (numStr.length <= 13) {
        return true;
    }
    return false; // num too long
}

// when clicking an operator (+, - etc) button
function setOperator(str: string) {
    // if num1 is undefined, we don't have anything to operate on, so do nothing
    if (num1 !== undefined) { 
        operator = str;
        return operator;
    }
}

// event listeners to our 0-9 buttons:
numBtns.forEach((btn: HTMLElement) => {
    // each btn has relevant 0-9 as data:
    let dataNum: number = parseInt(btn.dataset.num!); // cast str data to num for param type

    btn.addEventListener('click', () => {
        let currentNum: number = setNum(dataNum)!; // concatenates if already nums
        display(currentNum);
    });
});

// event listeners to our operator (+,- etc) btns:
funcBtns.forEach((btn: HTMLElement) => {
    let operator: string = btn.dataset.operator!; // each operator has ex. 'multiply' as data

    btn.addEventListener('click', () => {
        setOperator(operator);
        display(operator);
    });
});

// event listener to equals btn, which uses current operator on num1 and 2:
getElem('btnEquals').addEventListener('click', () => {
    if (typeof num1 !== 'undefined' &&  
        typeof num2 !== 'undefined' && 
        typeof operator !== 'undefined') {
        let result: number | string = operate(operator!, num1!, num2!)!; 
        display(result);
        // set variables for performing more operations:
        if (typeof result === 'number') { // result will be str if user div by 0
            num1 = result; // for operating on prev results
            operator = undefined;
            num2 = undefined;
        } else { // user div by 0
            clearData(); // all 3 vars are now undefined
        }
    }
});

// event listener to AC (all clear(?)) button:
getElem('btnClear').addEventListener('click', () => {
    clearAll();
});

// event listener to all buttons, which adds class ('pressed') that changes color
let calcBtns: any = Array.from((document.querySelectorAll('.calcBtn')));
calcBtns.forEach((btn: HTMLElement) => {
    btn.addEventListener('click', () => {
        // first remove all other pressed effects
        removeClasses(calcBtns, 'pressed');
        // then add it to current button
        btn.classList.add('pressed');
    });
});

// display the number received from setNum or setOperator in the display btn
// operators and error (div 0) are strings, while numbers are trimmed to <= 13 chars and typecast
function display(input: number | string) {
    if (typeof input === 'number') {
        input = trimNumberToStr(input);
    }
    getElem('divDisplay').innerText = input;
}

// keep numbers to 13 chars, return them as str for display
function trimNumberToStr(num: number) {
    let numStr = num.toString();
    if (!checkBelowMaxLength(num)) {
        numStr = numStr.substring(0,14); // [0,14) range
    }
    return numStr;
}

function clearAll() {
    clearData();
    clearDisplay();
}

function clearData() {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}

// set the 'display' to blank
function clearDisplay() {
    getElem('divDisplay').innerText = '';
}