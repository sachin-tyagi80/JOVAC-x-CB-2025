// //setTimeout -> asynchronous
// setTimeout(() => {
//   console.log("serve water");
// }, 5000);

// setTimeout(() => {
//   console.log("Serve Soup");
// }, 2000);

// setTimeout(() => {
//   console.log("Serve Drinks");
// }, 1000);

// setTimeout(() => {
//   console.log("Serve Dinner");
// }, 2400);

// setTimeout(() => {
//   console.log("Pay Bill and Checkout");
// }, 1000);

// ///output:
// // Serve Drinks        // after 1 sec
// // Pay Bill and Checkout  // also after 1 sec (almost same time)
// // Serve Soup          // after 2 sec
// // Serve Dinner        // after 2.4 sec
// // serve water         // after 5 sec

// /// JavaScript code asynchronous task execution using callbacks

// function serveWater(callback) {
//   console.log("Serving water to the group");
//   setTimeout(callback, 1000);
// }

// function serveSoup(callback) {
//   console.log("Serving soup to the group");
//   setTimeout(callback, 1000);
// }

// function serveStarters(callback) {
//   console.log("Serving Starter to the group");
//   setTimeout(callback, 1000);
// }

// function serveDrinks(callback) {
//   console.log("Serving Drinks to the group");
//   setTimeout(callback, 6000);
// }

// function serveDinner(callback) {
//   console.log("Serving Dinner to the Group");
//   setTimeout(callback, 1000);
// }

// function payBill() {
//   console.log("Paying the Bill & Out of the Hotel");
// }

// console.log("STARTED A DAy");

// serveWater(() => {
//   serveSoup(() => {
//     serveStarters(() => {
//       serveDrinks(() => {
//         serveDinner(() => {
//           payBill();
//         });
//       });
//     });
//   });
// });

// console.log("END OF THE DAy");

// ///output:
// // STARTED A DAy
// // Serving water to the group
// // END OF THE DAy
// // Serving soup to the group       [1 sec]
// // Serving Starter to the group    [2 sec]
// // Serving Drinks to the group     [3 sec]
// // Serving Dinner to the Group     [9 sec]
// // Paying the Bill & Out of the Hotel [10 sec]

// ///////////////////////////////
// //MICRO VS MACRO

// console.log("Program Start"); // synchronous line

// setTimeout(() => {
//   //setTimeout() → Delay ke baad execute hota hai,asynchronous timer
//   console.log("I am SetTimeout");
// }, 2000);

// fetch("https://dummyjson.com/products").then(function productDet() {
//   //Network API call//fetch() → Background me data fetch karta hai, baad me response milta hai
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet() {
//   console.log("DATA : SOMETHING");
// });

// console.log("Program End"); // synchronous code

// // output:
// // Program Start
// // Program End
// // DATA : SOMETHING
// // DATA : SOMETHING
// // DATA : SOMETHING
// // DATA : SOMETHING
// // DATA : SOMETHING
// // DATA : SOMETHING
// // DATA : SOMETHING
// // I am SetTimeout

// ////////////////////////////////////////////
// // Higher Order Function

// const data1 = [2, 5, 3, 6];

// const data2 = [5, 7, 43, 7];

// const calculateDouble = function (x) {
//   let output = [];
//   for (let i = 0; i < x.length; i++) {
//     output.push(x[i] * x[i]);
//   }
//   return output;
// };

// console.log(calculateDouble(data1));
// // console.log(calculateDouble(data2));

// const calculateHalf = function (data) {
//   let output = [];
//   for (let i = 0; i < data.length; i++) {
//     output.push(data[i] / 2);
//   }
//   return output;
// };

// console.log(calculateHalf(data1));
// console.log(calculateHalf(data2));

// ///higher order function

// const doubleData = function (data) {
//   return data * data;
// };

// const calculate = function (data, logic) {
//   //calculate() is a higher-order function — it takes an array (data) and a function (logic) as arguments.
//   let output = []; // The results are stored in an output[] array.
//   for (let i = 0; i < data.length; i++) {
//     //It applies the logic() function to each element.
//     output.push(logic(data[i]));
//   }
//   return output;
// };

// const data1 = [8, 4, 2, 6, 1];

// console.log(calculate(data1, doubleData));

// ////////////////////////

// // MAP :

// const arr = [5, 1, 4, 6];

// Double = [10, 2, 8, 12];

// Triple = [15, 3, 12, 18];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// const output = arr.map(double); // apply the double() function to each element of the array.

// console.log(output);

// const output1 = arr.map(triple);

// console.log(output1);

// ///////

// Array.prototype.calculate = function (logic) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 3, 2, 1];
// const output1 = arr1.calculate(double);
// console.log(output1);

// const output2 = arr2.calculate(double);
// console.log(output2);

// const arr = [2, 3, 4, 5, 6, 7, 8];

// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);

// console.log(output);
