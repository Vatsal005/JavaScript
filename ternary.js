const prompt = require("prompt-sync")({sigint:true});

console.log("Ternary Operator")
let a = prompt("Enter Number1:")
let b = prompt("Enter Number2:")
const c = (a>b) ? 
    console.log(a+" is Maximum") : console.log(b+" is Maximum");
    