// /////Function and method
// function print() {
//   console.log("welcome to sachin");
//   console.log("we are larning JS");
// }
// print();

// function mufunction(msg) {
//   // parameter -> input
//   console.log(msg);
// }
// mufunction("I love Js"); //arguments

// //function 2 number sum
// function sum(x, y) {
//   //function parm -> like local variable of functin -> block scope
//   //
//   //console.log(x + y);
//   s = x + y;
//   return s;
// }
// console.log(x); // x is a local variable
// console.log(sum(3, 4));

// /// arrow function
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(3, 5);

// ///////////////////////////////
// //partice q1
// //create a functin using the 'functin' keyword that takes a S tring as an argument & return the number of vowels in the string.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("abcd");

// /// Arrow function
// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// countVowels("abcd");

// //////////////////
// //useCallback()
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// //
// let arr = ["pune", "dehli", "mumbai"];
// ////higher order function
// arr.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });

// ///map method
// let nums = [5, 4, 8];
// let newArr = nums.map((val) => {
//   return val * 2;
// });
// console.log(newArr);

// // filter mthod
// // all even element
// let nums = [2, 5, 8, 3, 4];
// let evenArr = nums.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArr);

// ////////////
// // Reduce method
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

// Largest number
// let arr = [5, 7, 8, 3];
// const output = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });
// console.log(output);

// /////////////////////////////////////
// //partice q1
// //Take a number n as input from user. Create an array of numbers from 1 to n.
// //Use the reduce method to calculate sum of all numbers in the array.
// //Use the reduce method to calculate product of all numbers in the array.
// let n = prompt("enter a nuumber : ");
// let arr = [];
// for (let i = 1; i < n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log("sum = ", sum);

// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log("factorial = ", factorial);
