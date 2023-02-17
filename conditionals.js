const prompt = require("prompt-sync")({sigint:true});

let a = prompt("Enter Number1:")
let b = prompt("Enter Number2:")
let c = prompt("Enter Number3:")
if(a>b && a>c){
    console.log(a+" is Maximum")
}
else if(b>a && b>c){
    console.log(b+" is Maximum")
}
else{
    console.log(c+" is Maximum")
}