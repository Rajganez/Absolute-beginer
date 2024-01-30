// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
var a = userInput[0].split(" ");
let c = a[0];
let b = a[1];
for ( i = 0 ; i< b ; i++){
    console.log(c);
}

  //end-here
});







