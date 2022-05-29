import {
    operate,
} from './math'

import {
    appendSiblings, addClasses, removeClasses, toggleClasses, createSimilarElems, isPositiveInteger, clearInnerText, setInnerText, getElem,
} from './function'

import './style.css';

let num = operate('add', 1, 7);
console.log(num);

const paras = createSimilarElems('p', 3, ['hey,', 'ho'], 'one', 'two', 'three', 'four');
setInnerText('I am text', paras);
appendSiblings(getElem('funcDiv'), paras);

