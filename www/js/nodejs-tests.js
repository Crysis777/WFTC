#!/user/bin/env node

/*
 * This is for testing some node.js code
 *
 */

// Writing a file on the disk in the same folder
/*
const fs = require("fs");

const datum = new Date();
const textForFile = "The time is: " + datum + "and my name is Hase";

fs.writeFileSync("NewFileByCode.txt", textForFile);
console.log("\nFile was written");
*/

const readlineSync = require("readline-sync");
 
// Wait for user's response. 
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password). 
let favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default). 
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
