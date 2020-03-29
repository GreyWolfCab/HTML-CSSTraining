/* allows new features in javascript, makes it easier to write "secure" code 
* switches the engine to "modern" mode*/
"use strict";

const COLOR_ORANGE = "#ff7f00";//constant that is hardcoded

let message = "Hello";//strict way to declare a variable

const userBirthday = "??/??/????";//constant that is unkown before execution

//alert example
console.log(message);

//variable example
let name = "John";
let admin = name;
console.log(admin);
let ourPlanet = "earth";//name of our planet
let curUser = "Username";//name of current visitor of website

//data type example
let n = 123;//number type represents integers and floats
n = 12.346;
n = Infinity;//special values
n = NaN;//NaN represents an error without producing a fatal error
//numbers handle 2^53

//bigints handle numbers of arbitary length
let bigInt = 12134567890123456789012345678901234567890n;//requires an "n" at the end to be a bigint

//Strings
let str = "hell0";
let str2 = 'single quotes work';
let phrase = `can embed another ${str}`;
//backtick (tilde key) extend functionality, allow us to embed variables into a string

let expression = `1 + 2 = ${1 + 2}`;
console.log(expression);

//booleans
let isBool = true;
let isGreater = 4 > 1;
console.log(`4 > 1 : ${isGreater}`);

//null is it's own type that represents nothing
bigInt = null;//null can be applied to any data type
console.log(bigInt);

//undefined is it's own type meaning value is not assigned
let z;
console.log(z);

//use null to empty a variable, use undefined to check if a variable has been assigned

//typeof can be an operator or function
typeof(bigInt);//"object" because bigint was made null
typeof bigInt;//"object"
typeof null;//returns an "object", but this is an error with the language

typeof 10n;//"bigint"
typeof "bar";//"string"
typeof undefined;//"undefined"
typeof alert;//"function"

//type conversion
let value = true;
console.log(`Type conversions: ${typeof value}`);
value = String(value);
console.log(typeof value);

value = "6" / "2";//strings are converted to numbers
let num = Number("123");//explicitly converts to number
num = Number("an arbitrary string instead");//results in NaN

console.log(Boolean(1));//true, in non-emp

//operators
let x = -1;//'-' is an unary operator
let bool = true;
console.log(+bool);//unary operator, converts types to a number

str = "fake" + "String";//+ is a binary operator
console.log(`Concatenation: ${str}`);
console.log(2 + 2 + '1');//adds 2 + 2, concatenates 4 + '1'

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);//assignment operator returns the assigned value

console.log(a);//3
console.log(c);//0

//remainder
console.log(5 % 2);// returns 1

//exponentiation
console.log(2 ** 3);// 2*2*2 = 8
console.log(4 ** (1/2))// works for non-integers, sqrt(4)

//increment/decrement
let counter = 0;
console.log(`postfix increment: ${counter++}`);
console.log(`prefix increment ${++counter}`);

//modify-in-place
n = 0;
n += 5;

//comma operator chains operations together and only returns the last operation
a = (1 + 2, 3 + 4);//discards 1+2
console.log(a);
let q = 2, y = 5;//normal use