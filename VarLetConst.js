(function(){
console.log(i);
//Var's value is undefined, this means the var is declared (but how?)
if("5"==="5"){
var i = 100;
}
console.log(i); //Var's value is 100, but i'm out of the if statement!
})();
    
(function(){
var i;
//Var is declared but the value is not defined, so it automatically inherits the string 'undefined'
console.log(i);
if("5"==="5"){
i = 100;
//^ its changing var i's value from 'undefined' to the integer 100.
}
console.log(i); //Var's value is 100 like expected
})();

(function(){
console.log(i); //Error: i not defined
if("5"==="5"){
console.log(i); //Error: i not defined
let i = 100;
console.log(i); //Should print '100' (delete the first two logs)
}
console.log(i);//Error: i not defined
})();

(function(){
const message ="what up";
console.log(message);
message = "bye"; //Error: Message is already declared
console.log(message);
})();
