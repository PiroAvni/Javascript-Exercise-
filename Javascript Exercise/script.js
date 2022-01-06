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
// PROBLEM - 1
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
  let max = temps [0]; // decaring the first element of the array as a max temp - assume the maximum value of the array is the first element
  let min = temps [0]; // decaring the first element of the array as a min temp - assume the minium value of the array is the first element

  for (let i = 0; i < temps.length; i++) { // loop through the array or over the array - start ar 0, element in the array must be less then the length of the array and increments by 1

    const curTemp = temps[i]; // decalring an curTemp variable that is equal to temps

    if(typeof curTemp !== 'number') continue;

    if (curTemp  > max) max = curTemp; // an iteration test  the current value  in the array  is greater than the maximum value - if it is then the new maximum value is stored -if NOT it is ignonored and moves on to the next array value

    if (curTemp  < min) min = curTemp; // an iteration test the current value in the array if it  is less than the minium value  - if it is then the new minium value is stored - if NOT it is ignonored and moves on to the next array value
  }
  console.log(max, min);// out puts the data
  return max - min;
};
   
   const amplitude = calcTempAmplitude(temperature);//  store the results in to a variable an array of values
   console.log(amplitude);
// begining - before the loop starts - the Max value would be 3 ( the first element of the array)
// the loops begins - is 7  the second element in the array) greater > than the pervious max(3) = yes 
//  7 ( the second element in the array) is the new max ( max = temps [i])


// PROBLEM - 2
// FUNCTION SHOW NOW  RECEIVE 2 ARRAYS OF TEMPS

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! just merge two arrays

// 2) Breaking up into sub-problems with
// - Merge 2 arrays