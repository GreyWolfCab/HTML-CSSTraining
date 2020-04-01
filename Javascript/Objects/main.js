"use strict";

//objects
let key = "goes outside";
//objects store an amount of key: value pairs
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    [key]: false//multiword key name
};//object literal

//integer property names are automatically sorted
const phone = {
    "+49": "Germany",
    "+41": "Switzerland",
    "44": "Great Britain",
    "1": "USA",
    dialTone() {
        console.log("Beep-Boop-Bop", this["+41"]);
    }
};
phone["1"] = "America";//properties inside const objects can be changed

console.log(user.name);//access object data dot notation

console.log(user[key]);//access multiword key square notation

//constructor
function User(name, age) {
    return {
        name,//shorthand properties key is variable name
        age//value is variable contents
    };
}

let newUser = new User("jackson", 44);

for (let x in newUser) {
    console.log(newUser[x]);
}

user.sayHi = () => {
    console.log(user.name, "says hi.");
};

//in operator checks if a key exists in an object
console.log(`Name in user: ${"name" in user}`);
user.sayHi();

delete phone["44"];
//for in loop
for (let key in phone) {
    console.log(`${key} : ${phone[key]}`);
}

//check for empty objects
function isEmpty(obj) {
    for (key in obj) {
        return false;//executes if a property exists
    }
    return true;
}

//garbage collection
//only unreachable values will be cleaned up
//local/global variables cannot be cleaned up, but if their references are severed and their data becomes unreachable it will be marked as garbage
let trash = {
    plastic: true
};

trash = null;//severs the variables connection to the "plastic: true" data
//"plastic: true" is unreachable, thus it is garbage

//symbols
//unique keys to obfuscate data in an object
let id = Symbol("description for ew");
let ew = {
    data: "easily accessible data",
    [id]: 123//"hidden" data
}

console.log(ew[id]);