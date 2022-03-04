/* 
/////////////////////////////////////
// Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Francis";
let PI = 3.1415;

let myFirstJob = "Tech";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob); 

/////////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Francis");

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1988;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////////////
// let, const, and var
let age = 30;
age = 31;

const birthYear = 1988;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Akortia';
console.log(lastName);

/////////////////////////////////////
// Basic Operators

//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Question 1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

//Question 2
const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markBMI2 = massMark / (heightMark * heightMark);
const johnBMI2 = massJohn /( heightJohn * heightJohn);

console.log("Mark's BMI is " + " " + markBMI);
console.log("Mark's BMI is " + " " + markBMI2);
console.log("John's BMI is " + " " + johnBMI);
console.log("John's BMI is " + " " + johnBMI2);

//Question 3
const markHigherBMI = markBMI > johnBMI;
console.log("Mark has a higher BMI than John - ", markHigherBMI);
*/

/*

const firstName = 'Francis';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const francis = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(francis);

const francisNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(francisNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young wait another ${yearsLeft} years.`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);