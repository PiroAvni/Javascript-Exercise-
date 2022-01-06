// Exercise 1

//Write a function that takes two numbers and returns the maximum of the two.

//my way
// const inputNumber1 = Number(prompt("Pick a Number?"));
// const inputNumber2 = Number(prompt("Pick another Number?"));
// console.log(inputNumber1, inputNumber2); 

// function maxNumber (inputNumber1, inputNumber2) {
//   return Math.max(inputNumber1, inputNumber2);
// }

// console.log(maxNumber(inputNumber1, inputNumber2));

// //////////////////////////////// another way
// let number = max(inputNumber1, inputNumber2);
// console.log(number);
// function max (a, b) {
//   if (a > b) return a; 
//   //else 
//   return b;
// }

// //////////////////////////////// another way 
// let numbers = max(inputNumber1, inputNumber2);10
// console.log(numbers);

// function maxer ( a, b){
//   return (a >b) ? a : b;
// }

/// Exercise 2

// We work for a company building a smart home thermometer. Our most recent task is this: " Given an array of temperatures of the day, calculate the temperature ampltude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: Difference between highest and lowest temp 
// - How to computer max and min temperatures?
// - what's a sensor error? and what to do?

//  2) Breaking up into sub-problems
// - how to  ignore sensor errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it


const calcTempAmplitude = function (temps) {

  let max = temps [0];
  for(let i = 0; i < temps.length; i++){
    if(temps [i] > max) max = temps [i];
  }
  console.log(max);
  calcTempAmplitude([3, 7, 4]);

  }
};