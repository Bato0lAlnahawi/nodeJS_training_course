const prompt =require("prompt-sync")();
var str;
str = prompt("Please enter");

Rev(str);

function Rev (str){
    var reversed =str.split("").reverse().join("");
    console.log(reversed);
    }