// Exercise 

//Write a function that takes two numbers and returns the maximum of the two.

//my way
const inputNumber1 = Number(prompt("Pick a Number?"));
const inputNumber2 = Number(prompt("Pick another Number?"));
console.log(inputNumber1, inputNumber2); 

function maxNumber (inputNumber1, inputNumber2) {
  return Math.max(inputNumber1, inputNumber2);
}

console.log(maxNumber(inputNumber1, inputNumber2));

//////////////////////////////// another way
let number = max(inputNumber1, inputNumber2);
console.log(number);
function max (a, b) {
  if (a > b) return a; 
  //else 
  return b;
}

//////////////////////////////// another way 
let numbers = max(inputNumber1, inputNumber2);10
console.log(numbers);

function maxer ( a, b){
  return (a >b) ? a : b;
}