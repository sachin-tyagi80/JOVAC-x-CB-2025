//// PROMISE CREATE AND CALLING

// A new Promise is created and stored in the variable 'yateeshAssignment'
const yateeshAssignment = new Promise(function (resolve, reject) {
  // Using setTimeout to simulate a delay of 5 seconds (asynchronous task)
  setTimeout(() => {
    // This message will be printed after 5 seconds
    console.log("I am Yateesh ! My Work is Done !!!");

    // The Promise is resolved with the message "Task Completed"
    resolve("Task Completed");
  }, 5000); // 5000 milliseconds = 5 seconds
});

// When the Promise is successfully resolved, the .then() block will execute
yateeshAssignment.then((message) => {
  // This message will be printed when the Promise is resolved
  console.log("Promise Resolved:", message);
});

//////////////////////////////////////////////////////////
// ANOTHER EXAMPLE WITHOUT PROMISE

// Function that logs a message after 5 seconds
const yateeshAssignment = function () {
  setTimeout(() => {
    console.log("MY WORK DONE"); // Delayed message
  }, 5000);
};

// Function that calls yateeshAssignment
function anweshaTask() {
  yateeshAssignment(); // Start the 5-second timer
  console.log("DATA", "Waiting for Yateesh"); // This runs immediately
}

// Run the function
anweshaTask();

///////////////////////////////////////////////
// ASYNC AWAIT EXAMPLE

console.log("CLASS STARTED");
const projectSubmissionByYateesh = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("YATEESH STARTED WORK");
    resolve("I am Yateesh ! My Work is Done !!!");
  }, 5000);
});
console.log("Lunch Time");

///////resolve() result printed
console.log("CLASS STARTED");

const projectSubmissionByYateesh = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("YATEESH STARTED WORK");
    resolve("I am Yateesh ! My Work is Done !!!");
  }, 5000);
});
console.log("Lunch Time");
//.then() is a method used with Promises in JavaScript.
//It runs after the Promise is resolved (successful) and receives the result of that Promise.
projectSubmissionByYateesh.then(function (message) {
  console.log(message); // Resolved value will be printed here
});

//////////////////////////////////////////////////
// Define the Promise first
const projectSubmissionByYateesh = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("YATEESH STARTED WORK");
    resolve("I am Yateesh ! My Work is Done !!!");
  }, 5000);
});

// Use it in an async function
async function projectEvaluation() {
  console.log("ATTENDANCE");
  const projectFile = await projectSubmissionByYateesh; // Now it will work
  console.log("DATA", projectFile);
  console.log("Project File Check");
}
projectEvaluation();
console.log("Class End!!");

///////////////////////////////////////////////////////////////////
//PROGRAM ---->   first Class start , Yateeesh Assignment Banayega  ---> Project Evaluation -> Marks -> End
console.log("Class Start");

const projectSubmissionByYateesh = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("I have Completed the Project");
    resolve("WORK DONE BY YATEESH");
  }, 5000);
});

function projectEvaluation() {
  const fileOfYateesh = projectSubmissionByYateesh;
  console.log("FILE RECEIVED AND CHECKED!!!", fileOfYateesh);
  console.log("Class End");
}
projectEvaluation();
console.log(
  "I AM OUTSIDE ASYNC FUNCTION, WHICH WILL BE NOT AFFECTED BY ANY ASYNC FUNCTION"
);

//////////////////////////////////////////
// WORKING EXAMPLE IN PROJECTS

async function fetchProductData() {
  const response = await fetch("https://dummyjson.com/products");
  const data = response;
  console.log(data);
}

fetchProductData();

console.log("Class start");

const projectSubmission = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Project submitted");
    resolve("Project submission successful");
  }, 5000);
});

async function projectEvalution() {
  const file = await projectSubmission;
  console.log("Project evaluated", file);
  console.log("Class end");
}

const data = fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("START");
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
}

console.log("END");

getProducts();

//////////////////////////////////////////////////////////////////////////////////////
/////call()
//Invoke a function //Set the value of this inside that function//Pass arguments one by one
function admissionProcess(greet, fees) {
  console.log(greet + this.name + fees);
}
const student = { name: "Yateesh" };
const student2 = { name: "Anwesha" };
admissionProcess.call(student, "Hello, ", " Your Fees: 2 Lacs");
admissionProcess.call(student2, "Hello, ", " Your Fees: 5 Lacs");

/////////////////////////////////////
//apply()
///Passed as an array//	Invokes the function

function admissionProcess(greet, fees) {
  console.log(greet + this.name + fees);
}
const student = { name: "Yateesh" };
const student2 = { name: "Anwesha" };
admissionProcess.apply(student, ["Hello, ", " Your Fees: 2 Lacs"]);
admissionProcess.apply(student2, ["Hello, ", " Your Fees: 5 Lacs"]);

///////////////////////////////////
// bind()//.bind() method does not invoke the function immediately.
//Instead, it returns a new function with a permanently bound this value.

function admissionProcess(greet, fees) {
  console.log(greet + this.name + fees);
}

const student = { name: "Yateesh" };
const student2 = { name: "Anwesha" };
const studentData1 = admissionProcess.bind(
  student,
  "Hello, ",
  " Your Fees: 2 Lacs"
);
const studentData2 = admissionProcess.bind(
  student2,
  "Hello, ",
  " Your Fees: 5 Lacs"
);
studentData1();
studentData2();

////////////////////////////////////////////////////////

//CURRYING IN JS
//NORMAL APPROACH

function sumOfAll(a, b, c) {
  return a + b + c;
}

console.log(sumOfAll(10, 20, 30));

////CURRYING APPPROACH

function firstNumber(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(firstNumber(5, 10, 20));
console.log(firstNumber(10(20(30))));

console.log(firstNumber(5)(10)(20));

const answer = firstNumber(5);
const answer2 = answer(20);

console.log(answer2(30));

//Subway Order

function chooseBread(bread) {
  return function (patty) {
    return function (cheese) {
      return `Your Bread: ${bread}, Your Patty: ${patty}, " Cheese: ${cheese}`;
    };
  };
}

console.log(chooseBread("Multigrain")("Paneer")("With Cheese"));

///////////////////////////////////////////

// EVENT CAPTURING AND EVENT BUBBLING

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//ADD EVENT LISTENERS

grandparent.addEventListener(
  "click",
  () => {
    console.log("GRANDPARENT DIV CLICKED");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("PARENT DIV CLICKED");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("CHILD DIV IS CLICKED");
  },
  true
);
