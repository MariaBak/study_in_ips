/* Last char */
/* first version */
function lastCharVersionFirst(enterString) 
{
    return enterString.slice(-1);
}

/* second version */
function lastCharVersionSecond(enterString) {

    let stringLength = enterString.length;
    let withoutLastChar = enterString.charAt(stringLength - 1);
    
    return withoutLastChar;
}

let lastCharArrowFunction = (enterString) => 
{
	return enterString.slice(-1)
};

console.log(lastCharArrowFunction('some text for test'));

/* without last chars */
/* first version */
function withoutLastCharectFirst(enterString) 
{
    return enterString.slice(-enterString.length, -1);
}


/* reverse string */
/* first version */
function reverseStringFirst(enterString) {
    let newString = '';
    let stringLength = enterString.length;
    let oldString = enterString;

    while (stringLength != 0) 
    {
        stringLength--;
        newString = newString + oldString[stringLength];
    }

    return newString;
}

/* second version */
function reverseStringSecond(enterString) 
{
    return enterString.split('').reverse().join('');
}

function withoutExtraSpacesSecond(enterString) 
{
    let arrayOfElementsLength = enterString.length;
    let counter = 0;

    while (counter != arrayOfElementsLength) { 
        const removeSpace = (enterString[counter] == ' ' && enterString[counter + 1] == ' ') ? delete enterString[counter] : counter++;
    }

    return enterString.trim();
}


console.log('5.1.1 lastCharVersionFirst(\'some text for test\')');
console.log(lastCharVersionFirst('some text for test'));

console.log('5.1.1 lastCharVersionSecond(\'some text for test\')');
console.log(lastCharVersionSecond('some text for test'));

console.log('5.1.2 withoutLastCharectFirst(\'some text for test\')');
console.log(withoutLastCharectFirst('some text for test'));

console.log('5.1.3 reverseStringFirst(\'some text for test\')');
console.log(reverseStringFirst('some text for test'));

console.log('5.1.3 reverseStringSecond(\'some text for test\')');
console.log(reverseStringSecond('some text for test'));

console.log('5.1.4 withoutExtraSpacesSecond(\'  some      text      for    test\'   )');
console.log(withoutExtraSpacesSecond('  some      text      for    test'   ));