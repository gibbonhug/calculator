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
// set the text to be 0-9:
for (let i = 0; i <= 9; i++) {
    numBtns[i].innerText = i.toString();
}
// append the 0-9 buttons:
appendSiblings(getElem('numDiv'), numBtns);