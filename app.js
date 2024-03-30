// CHAPTER "Math Mathods"
// 1 (a)
var number = 3.45214
console.log(Math.random(number));

// (b)
var number = 2.64
console.log(Math.round(number));

// (c)
var number = 3.45
console.log(Math.floor(number));

// (d)
var number = 5.55
console.log(Math.ceil(number));

// 2(b)
var numberNegative = -12.34
console.log(Math.round(numberNegative));

// (c)
var floor = -3.67
console.log(Math.floor(floor));

// (d)
var number = Math.ceil(-3.767)
console.log(number);

// 3
var absolute = 5
console.log(Math.abs(absolute));

// 4
var number = prompt("enter number");
 var dice = (Math.floor(Math.random()*6)+1);
 console.log(dice);

// //  5
var headUser = prompt("enter your name")
var tailUser = prompt("enter your name")

var toss = Math.random() *2;
 
var convert = Math.floor(toss);

if(convert === 0 ){
    console.log(headUser,"win the toss");
}
else{
    console.log(tailUser,"win the toss");
}

// 6

// 7
// var userInput = prompt("enter your weight in kilograms");

// for(var i = 0; i >= 50; i++ ){
//     if (user.Input = [i])
// }

// chapter 26 (Rounding number)

// 1
var num = Math.ceil (5.43);
console.log(num);

// 2
var origNum = 7.8;
roundNum = Math.ceil(origNum);

console.log("original num", origNum);
console.log("rounded up number", roundNum);

// chapter 27 (Random Number)

// 1
var randomNum = Math.floor(Math.random()*50) +1;
console.log (randomNum);

// 2
var num = Math.random();
console.log(num);

// 3
var num = Math.floor(Math.random()*6)+1;
console.log(num);

// 4
var num = Math.floor(Math.random()*2)+1;
console.log(num);

// chapter 28,29(converting Strings)

// 1
var num = "123"
console.log("convert string to integer",num);

// 2

var num = "123"
console.log("convert string to integer",num);

// 3
var float = 9.23
console.log(float);
