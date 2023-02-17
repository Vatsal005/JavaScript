const prompt = require("prompt-sync")({sigint:true});

let a = prompt("Enter a Number : ");
if (a%'2'==0) {
    if(a%'3'==0){
        console.log("Divisible by 2 and 3.")    
    }
    else{
        console.log("Devisible by 2.")
    }
} 
else{
    console.log("Not Divisible by 2 or 3.")
}