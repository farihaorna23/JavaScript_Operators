console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a = 20;
let b = 4;
let add = a + b;

let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(add, minus, multiply, dividing);
// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

//What is the value of: num + str?
let result1 = num + str;
console.log(result1); //1111
//What is the value of: num + str2?
let result2 = num + str2;
console.log(result2); //11eleven
//What is the value of: num + isPresent?
let result3 = num + isPresent;
console.log(result3); //12
//because true value is 1, sp 11 + 1 = 12
//What is the value of: firstName + num?
let result4 = firstName + num;
console.log(result4); //Frodo11
//What is the value of: isPresent + str?
let result5 = isPresent + str;
console.log(result5); //true11
//What is the value of: firstName + lastName?
let result6 = firstName + lastName;
console.log(result6); //FrodoBaggins
// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

//What is the value of: val == str3?
console.log(val == str3); //true
//What is the value of: val === str3?
console.log(val === str3); //false
//What is the value of: !isAwake?
console.log(!isAwake); //true
//What is the value of: ("eleven" == str4 && val >= str3)
console.log("eleven" == str4 && val >= str3); //false
//What is the value of: (!isAwake || isAwake)?
console.log(!isAwake || isAwake); //true
//What is the value of: 0 == false?
console.log(0 == false); //true
//What is the value of: 0 === false?
console.log(0 === false); //false
//What is the value of: 0 != false?
console.log(0 != false); //false
//What is the value of 0 !== false?
console.log(0 !== false); //true
