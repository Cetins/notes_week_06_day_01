//there are three ways in Js:


// 1. Named Function - this one we should not use
function sayHello() {
    return 'Hello World!';
}
console.log('sayHello message:', sayHello());

function sayHelloName(name) {
    return `Hello ${name}`;
}
console.log('sayHelloName message:', sayHelloName('Kat'));

//because this is a named function it will be hoisted to the top - if I run this function without declaring it, it will still run!!


function sayHelloBoth(greeting, name = 'world') { // we can add defaults, just like in Python
    return `${greeting} ${name}`;
}
console.log('sayHelloBoth message:', sayHelloBoth('Hi'));



// 2. Anonymous Function - won't have a name, we have to put it in a variable - this one is commonly used!!
// if we try to run it before declaring it, we will get an error message!!
var add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log('1 + 3 =', add(1, 3));



// 3. Arrow function - uses =>
var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}
console.log('multiply 2 by 5:', multiply(2, 5));

// if this function is doing just a single expression, we can simplifying it! it's an arrow function with implicit return:
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log('multiply 2 by 5:', multiply(2, 5));


