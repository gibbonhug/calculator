/*
Element generating functions as well as isPositiveInt function
*/

type strOrStrArray = string | string[];
type HTMLOrHTMLArray = HTMLElement | HTMLElement[];

/* Append a set of elements to the same parent
Parameters can be elements or arrays of elements
Returns flat array of siblings regardless of array struc of input */
function appendSiblings(elemParent: HTMLElement, ...elemSiblings: any[]) {
    let siblingArray: HTMLElement[] = [];
    elemSiblings.forEach(elem => { 
        if (Array.isArray(elem)) { // passing in array of siblings
            appendSiblings(elemParent, ...elem);
            return; // do not attempt to append array itself
        }
        elemParent.appendChild(elem);
        siblingArray.push(elem);
    });
    return siblingArray;
}

/* Add multiple classes to singe element / array of elements
Class parameters can be array of classes or classes
Returns the element/array of elements itself */
function addClasses(elem: HTMLOrHTMLArray, ...classes: any) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            addClasses(subElem, ...classes);
            return; // do not attempt to add classes to array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass: strOrStrArray) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            addClasses(elem, ...subClass);
            return; // do not add array as a class
        }
        elem.classList.add(subClass);
    });
    return elem; // returning single elem input
}


/* input a single element or array of elements, and multiple classes to remove
Class parameters can be array of classes or classes
returns this element/array of elements */
function removeClasses(elem: HTMLOrHTMLArray, ...classes: any) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            removeClasses(subElem, ...classes);
            return; // do not attempt to remove classes from array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass: strOrStrArray) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            removeClasses(elem, ...subClass);
            return; // do not remove the array as a class
        }
        elem.classList.remove(subClass);
    });
    return elem; // returning single elem input
}

/* input a single element or array of elements, and multiple classes to remove
Class parameters can be array of classes or classes
returns this element/array of elements */
function toggleClasses(elem: HTMLOrHTMLArray, ...classes: any[]) {
    if (Array.isArray(elem)) { // inputting array of elements instead of one element
        elem.forEach((subElem) => {
            toggleClasses(subElem, ...classes);
            return; // do not attempt to remove classes from array
        });
        return elem; // returning input array
    }
    classes.forEach((subClass: strOrStrArray) => {
        if (Array.isArray(subClass)) { // passing in arrays of classes
            toggleClasses(elem, ...subClass);
            return; // do not remove the array as a class
        }
        elem.classList.toggle(subClass);
    });
    return elem; // returning single elem input
}



/* input a tag, number of elems to generate, array of
        classes to add, and id's
classes are an array due to ability to
        input specific id parameters
returns an array of these new elements */
function createSimilarElems(tagName: string, numElem: number, classArray: string[], ...elemIdList: string[]) {
    let valid = true;
    // mandatory parameters
    if (tagName === undefined) {
        valid = false;
    }
    if (!isPositiveInteger(numElem)) {
        numElem = 0;
    }

    // if attempting to add less elements
            // than # of ids inputted, will default to amount of id
    if ( (numElem <= elemIdList.length)) {
        if (elemIdList.length === 0) { // no id's passed into func
            valid = false;
        }
        numElem = elemIdList.length;
    }

    let similarElemArray: HTMLElement[] = [];
    let currentElem;
    if (!valid) {
        console.log('invalid input to createSimilarElems');
    } else {
        for (let currentIndex = 0; currentIndex < numElem; currentIndex++) {
            currentElem = document.createElement(tagName); // create elem
            if (elemIdList[currentIndex] !== undefined) { // set its id if exists
                currentElem.setAttribute('id', elemIdList[currentIndex]);
            }
            addClasses(currentElem, classArray); // add the input classes
            similarElemArray.push(currentElem);
        }
    }
    return similarElemArray;
}

// clear inner text of array of (for ex.) paragraphs
// returns flat array of its parameters regardless of input struc
function clearInnerText(...elems: any[]) {
    let elemArray: HTMLElement[] = [];
    elems.forEach(subElem => {
        if (Array.isArray(subElem)) { // input array as single param
            clearInnerText(...subElem);
            return; // do not set inner text of array itself
        }
        subElem.innerText = '';
        elemArray.push(subElem); // flat array
    });
    return elemArray;
}

// specify inner text as first param
// rest params is array or list of elements to set text to
// returns array of elems with same structure as input 
function setInnerText(text: string, ...elems: any[]) {
    let elemArray: HTMLElement[] = [];
    elems.forEach((subElem: HTMLOrHTMLArray) => {
        if (Array.isArray(subElem)) { // input array as single param
            setInnerText(text, ...subElem);
            return; // do not set inner text of array itself
        }
        subElem.innerText = text;
        elemArray.push(subElem); // flat array
    });
    return elemArray;
}

// Returns a bool of if passed input is positive integer
function isPositiveInteger(num: number) {
    if (Number.isInteger(num) && num > 0) {
        return true;
    } else {
        return false;
    }
}

// input an element's id string to get this element
// shorter than typing full line
function getElem(destIdString: string) {
    const destElem: HTMLElement = document.getElementById(destIdString)!;
    return destElem;
}

export {
    appendSiblings, addClasses, removeClasses, toggleClasses, createSimilarElems, isPositiveInteger, clearInnerText, setInnerText, getElem
}