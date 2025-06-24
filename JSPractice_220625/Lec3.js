////loops  and string
// for (let i = 1; i <= 5; i++) {
//   // 1 2 3 4 5
//   console.log(i);
// }
// console.log(i); // let i = 1: The variable i is declared with block scope using let.
// //It is only accessible inside the for loop block.

// for (var i = 1; i <= 5; i++) {
//   // 1 2 3 4 5
//   console.log(i);
// }
// console.log(i); //n this case, var is function-scoped, so i is accessible outside the loop.

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//for-of-loop
// let str = "sachin";
// for (let i of str) {
//   console.log(i);
// }

// let str = "sachin";
// let size = 0;
// for (let val of str) {
//   console.log(i);
//   size++;
// }
// console.log("string size", size);//6

//for-in-loop
// let student = {
//   name: "sachin",
//   age: 25,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key=", key, "value=", student[key]);
// }

////Partice q2
// crete a game where you start with any random Number.Ask the user to
// keep guseeing th number until yhe user enters correct correct value
// let gameNum = 25;
// let userNum = prompt("Guess the game number :");
// while (userNum != gameNum) {
//   userNum = prompt("You entered worng number. Guess again :");
// }
// console.log("congraulation, you entered the right number");

////string

//  let str = "sachin";
//  console.log(str.length);
//  console.log(str[1]);

//// Template literal string
// let specialString = `this is my pen`;
// console.log(specialString);

// let obj = {
//   item: "pen",
//   price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;// template literal
// console.log(output);
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

////string interpolation
// let specialString = `this is my pen ${1 + 2 + 3}`;
// console.log(specialString);

////ecape charecters
// console.log("sachin\ntyagi");
// console.log("sachin\ttyagi");

////string methods
// let str = "Sachin";
// let str2 = "tyagi";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(0, 3));
// //let res = str + str2;
// let res = str.concat(str2);
// console.log(res);
// console.log(str.replace("ac", "ti"));
// console.log(str.charAt(0));

////partice q1
//promt to user to enter their full name.Generate a username for them basedon the input.
//start user with @,followed by their full name and ending with the fullname length.
// let fullname = prompt("enter your name");
// let username = "@" + fullname + fullname.length;
// console.log(username);
