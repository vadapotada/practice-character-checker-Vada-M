const readlineSync = require("readline-sync");

let interpretedWord = readlineSync.question("Enter any word you want, please: ");
let indexCount = readlineSync.question("Enter a number to determine the index. ");

console.log(interpretedWord[indexCount]);
