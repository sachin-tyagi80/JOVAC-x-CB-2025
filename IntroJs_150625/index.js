var age = 24; // redclared
var age = 36;
console.log(age);

let age = 24;
//let age = 50  //not a re delared but updated
age = 50;
console.log(age);

const age = 50; //not a re-declared and bot updated
age = 34;
console.log(age);

s2 = "Adit";
console.log(s2);

const s3 = "Pranshu";
console.log(s3);
const s3 = "Dev"; //Identifier 's3' has already been declared
console.log(s3);

var s1 = " Sachin";
let s1 = "Rahul";
console.log(s1); //SyntaxError: Identifier 's1' has already been declared

//function
function sum(num1, num2) {
  let ans = num1 + num2;
  return ans;
}
let sumOfNum = sum(2, 3);
console.log(sumOfNum);

function getName() {
  console.log("HELO");
}
var glaStudent = () => {
  console.log("I AM GLA STUDENT");
};
console.log(glaStudent);
console.log(glaStudent());
glaStudent();

var xyz = 20;
xyz(); // xyz is not a function

//LEXICAL SCOPE

function a() {
  var x = 10;
  console.log(x);
  // console.log(y);
  // var y =3000;
  b();
  function b() {
    var y = 20;
    console.log(y);
    c();
    function c() {
      var z = 30;
      console.log(z);
      console.log(y);
      console.log(x);
    }
  }
}
a(); // 10 20 30 20 10

function aGetName() {
  console.log("HELO");
}
var aGlaStudent = () => {
  console.log("I AM GLA STUDENT");
};
aGetName();
aGlaStudent();

var a = 4000;
{
  var a = 100;
  var b = 200;
  var c = 300;
}
console.log(a); //100
console.log(b); //200
console.log(c); //300

//////////////////////////////////////////////////////////

//CLOSURES IN JS

function a() {
  var x = 7;
  var y = 6;
  function b() {
    var y = 8;
    console.log(y);
  }
  y = 10;
  b();
}
a();

//CASE 2: CLOSURE:
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

//////////////////////////////////

//SETTIMEOUT

setTimeout(() => {
  console.log("Hello I am setTimeout Function i'll after 2 secs");
}, 6000);

//SETINTERVAL

setInterval(() => {
  console.log("Hello I am setInterval function i'll run after 2 secs");
}, 3000);

//FORLOOP

for (let i = 1; i <= 5; i++) {
  //1 2 3 4 5
  console.log(i);
}

//JS IS SINGLE THREADED OR NOT
//(JavaScript is a single-threaded language, meaning that it executes one operation at a time on a single thread.)

//EVENT LISTENERS

document
  .getElementById("functionCall")
  .addEventListener("click", function abc() {
    console.log("EVENT HAPPENED!!");
  });
