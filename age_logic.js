const prompt = require("prompt-sync")({sigint:true});

let a = prompt("Enter Your Age:")
if(a>10 && a<20){
    console.log(true);
}
else{
    console.log(false);
}