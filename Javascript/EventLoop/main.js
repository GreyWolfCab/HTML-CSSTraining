"use strict";

console.log("Hi");

setTimeout(() => {
    console.log("Not quite");
}, 5000);

console.log("Ending");

//the stack handles javascript calls like console.log
//webapis are enacted by the browser and handle the asynchronous functions specified by the browser like setTimeout
//task queue receives any callback functions from the webapis if there are any
//event loop checks if the stack is empty, then pushes from the task queue onto the stack