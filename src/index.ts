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
// set inner text (done here bc using getElem), and set data:
    getElem('btnAdd').innerText = '+';
    getElem('btnAdd').dataset.operator = 'add';

    getElem('btnSubtract').innerText = '-';
    getElem('btnSubtract').dataset.operator = 'subtract';

    getElem('btnMultiply').innerText = '×';
    getElem('btnMultiply').dataset.operator = 'multiply';

    getElem('btnDivide').innerText = '÷';
    getElem('btnDivide').dataset.operator = 'divide';


// create result, display, and clear btns:
const resultBtns = createSimilarElems('button', 1, ['resultBtn', 'calcBtn'], 'btnEquals', 'btnDisplay', 'btnClear');
// append:
appendSiblings(getElem('resultDiv'), resultBtns);
// set inner text, display has none on load:
getElem('btnEquals').innerText = '=';
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
    } else if (num2 == undefined) { // we have set our operator, and this is first/only dig of num2
        num2 = num;
        return num2;
    } else { // we have already set first digit of num2, and now concatenate more
        num2 = concatenate(num2!, num);
        return num2;
    }
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
    let dataStr: string = btn.dataset.num!; // each btn has data with 0-9 (as str)
    let dataNum: number = parseInt(dataStr); // cast it to num for param type

    btn.addEventListener('click', () => {
        let currentNum: number = setNum(dataNum);
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
        // includes results for now..
let calcBtns: any = Array.from((document.querySelectorAll('.calcBtn')));
calcBtns.forEach((btn: HTMLElement) => {
    btn.addEventListener('click', () => {
        // first remove all other pressed effects
        removeClasses(calcBtns, 'pressed');
        // then add it to current button
        btn.classList.add('pressed');
    });
});

// display the number received from setNum or setOperator in the display btn (usually clear)
// numbers are numbers; operators and errors are strings
function display(input: number | string) {
    getElem('btnDisplay').innerText = input.toString();
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
    getElem('btnDisplay').innerText = '';
}