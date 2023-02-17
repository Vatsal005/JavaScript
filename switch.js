const prompt = require("prompt-sync")({sigint:true});

console.log("1. To say 'Hello'")
console.log("2. To say 'Hii'")
let n = prompt("Choose one:")
switch (n) {
    case "1":
        console.log("Hello")
        break;
    case "2":
        console.log("Hii")
        break;
    default:
        console.log("Invalid.......")
        break;
}