////Arrays
// let marks = [96, 75, 60, 50];
// console.log(marks);
// console.log(marks.length); //property
// console.log(typeof marks);
// console.log(marks[1]); // index
// marks[1] = 70;
// console.log(marks); // index value change

////loops
//let heroes = ["sachin", "rahul", "shivam", "bhola", "aditya"];
// //for loop
// for (i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

//// for of loop
// for (let item of heroes) {
//   console.log(item);
// }

////UpperCase
// for (let item of heroes) {
//   console.log(item.toUpperCase());
// }

////////////////////////
////partice q1
////for a given array with prices of 5items->[250,645,300,900,50] all item have an offer 10% on them .change the array to store final price after applying offer.
//let item = [250, 645, 300, 900, 50];
////for of

// let i = 0;
// for (let val of item) {
//   //console.log(`value at index ${i} = ${val}`);
//   let offer = val / 10;
//   item[i] = item[i] - offer;
//   console.log(`value after offer = ${item[i]}`);
//   i++;
// }
// console.log(item);

/////for
// for (let i = 0; i < item.length; i++) {
//   let offer = item[i] / 10;
//   item[i] -= offer;
// }
// console.log(item);

/////////////
////Array method
// let food = ["mango", "apple", "litchi"];
// food.push("chips");
// console.log(food);
// food.pop();
// console.log(food);
// console.log(food.toString());

////concat method
// let marvel = ["thor", "spiderman", "ironman"];
// let dcMarvel = ["superman", "batman"];
// let heroes = marvel.concat(dcMarvel);
// console.log(heroes);

// marvel.unshift("anthm");//unshift
// console.log(marvel);

// marvel.shift();//shift
// console.log(marvel);

////// slice method and splice metho
// let marvel = ["thor", "spiderman", "ironman"];
// console.log(marvel.slice(1, 2));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
// console.log(arr);
// //Add element

// arr.splice(2, 0, 101);
// console.log(arr);
// //Delete element

// arr.splice(3, 1);
// console.log(arr);
// //Replace element

// arr.splice(3, 1, 101);
// console.log(arr);
