//Data types:
// string
var name = 'Mickey Mouse';
console.log('name:', name); // a way to print staff out knowing what they are
console.log({name}); // another way to print staff out knowing what they are
// variable names - camel case - myNumber or myName

// number (int/float)
var number1 = 1;
var number2 = 5;
console.log('The answer is ' + number1 + number2); // Js automatically converts numbers to strings
console.log('The answer is ' + (number1 + number2));
console.log(`Hello, ${name}`); // backtick gives a template string that we can inject values into

typeof 1;


// boolean (true/false)
// null (none) - intentional nothing (falsy value)
// undefined - unintentional nothing (falsy value)
// symbol
// object - dictionary, array

//NaN - Not a Number - a result of adding to a number something that is not a number (for example undefined + 1) - the reason is because Js runs in the browser and we don't want to freeze the app (UX experience)



// if statements:
//if (some condition) {run the code}

if (1 > 0) {
    console.log('The condition is true');
} else if (0 > 1) {
    console.log('Something appears to have gone wrong');
} else {
    console.log(`I guess they're the same`); // if there is a apostrofee used, just use the backtick for the string
}

if (null) {
    console.log('That appears to be true'); //null or any other empty values will be false (falsy values)
}



// different types of equality in Js

if (1 === 1) { // strict variant, always use these!! not ==, which is a loose variant
    console.log('These are the same');
}

if (1 === 1 && 2 === 2) { // && stands for 'and'
    console.log('These are the same');
}

if (1 === 1 || 2 === 2) { // || stands for 'or'
    console.log('These are the same');
}

// !myVariable - 