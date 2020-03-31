"use strict";

console.log("Part 2 output");

//comparisons
console.log(0 == false);//true
console.log('' == false);//true, because operands are converted to numbers by '=='
console.log('' != 1);

console.log(0 === false);//false, since strict equality check doesn't convert
console.log(0 !== false);//different types, insta false

//user-interface functions
alert("oh boy");//pauses execution until the user presses "ok"
//creates a modal window, which means the user cant interact until this window is dealt with

let age = prompt('How old are you?', 100);//prompt is shows a modal window with a message and an input field for the user, prompt returns whatever is in the input field
console.log(`The entered age was ${age}`);

let isBoss = confirm("Are you the boss?");//confirm shows a modal window with a question with two buttons, confirm returns either true or false based on the selected button

//Conditions if
if (age < 50) {
    console.log("You actually interacted with me?!");
} else if (isBoss) {
    console.log("guess it doesn't matter.")
} else {
    console.log("Welcome");
}

//Ternary Operator
let cond = (age >= 50) ? "This is nice" : "What's the hold up?";
console.log(cond);

//logical operators
let truthy = true || false || true;//or operator return only checks values if it hasn't found a true, otherwise it returns the very last value

let currUser = null;
let defaultUser = "John";
let displayName = currUser || defaultUser || "unnamed";//assign the first variable with a value
console.log(displayName);

let falsy = true && false && true;//and operator finds the first falsy value

console.log(!!displayName);//bang operator inverse and converts the value to a boolean, two bangs converts value to a boolean

let userLogin = prompt("Username: ", "useri");
if (userLogin === "Admin") {
    let pass = prompt("Password: ", "pass");
    if (pass === "TheMaster") {
        console.log("Whalecome!");
    } else if (pass === "") {
        console.log("Canceled");
    } else {
        console.log("Wrong password");
    }
}

//loops
let i = 3;

//while
while (i >= 0) {
    console.log(i);
    i--;
}

//do-while
do {
    console.log(i);
    i++;
} while (i < 5);
console.log(i);

//for
for (i = 0; i < 10; i++) {
    console.log(i);
}

//infinte for loop
for (;;) {
    break;//force exit the loop
    continue;//skips the current iteration of the loop
}

//continue to print only even numbers
for (i = 2; i <= 10; i++) {
    if(i % 2 == 1) continue;
    console.log(i);
}

//labels are identifiers for loops, break/continue calls to labels are only possible to labels above the call and if the call is in a loop
outer: for (i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let coors = prompt(`Value at (${i}, ${j})`, '');

        if (!coors){
            console.log("Exiting outer loop");
            break outer;//breaks the outer loop
        }
    }
}

//output prime numbers
let primeCheck = 10;
console.log(`Prime Numbers between 2 to ${primeCheck}`);
console.log(2);
outer: for (i = 3; i < primeCheck; i++) {
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue outer;
        }
    }
    console.log(i);
}

//switch statements
let browser = 'Firefox';
switch(browser) {
    case 'Edge':
        console.log('You got the edge');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log("You are supported");
        break;
    default:
        console.log("Ew, why are you using this");

}

//function declaration
//available globally anywhere in this code
function pow(x=1, n=1) {
    let vari = "a";//local variables with the same names as outer variables have precedence
    return x ** n;
    //return;//empty returns, return undefined
}

//function expression
//available only after the function has been assigned
//functions name are essentially variables. pow above is a variable that references the source code of the function
let sayHi = function() {
    console.log("HI");
};

let funcCopy = sayHi;//copies the code in sayHi to funcCopy
sayHi();//performs the function
funcCopy();//performs the function

//arrow functions
//shorter syntax for function expressions
let sum = (a, b) => a + b;//multi-argument arrow function
let double = n => n * 2;//single argument arrow function
let introduction = () => console.log("Hello");//zero argument arrow function
//multi-line arrow functions
let cum = (a, b) => {
    let result = a + b;
    return result;
};

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

console.log(ask("Do you agree?",
function() { alert("You agreed."); },
function() { alert("You canceled the execution."); }));