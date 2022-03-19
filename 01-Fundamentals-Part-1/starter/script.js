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

//Coding challenge #1

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

/*
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
*/


/*
// Coding Challenge #2

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;


const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markBMI2 = massMark / (heightMark * heightMark);
const johnBMI2 = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's (${johnBMI}) BMI is higher than Mark's (${markBMI})`)
}

*/

/*

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Francis'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/

/*

// 5 falsey values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Francis'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all;")
} else {
    console.log("You should get a job!")
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}

*/

/*
const age = '18';
if (age === 18) console.log('You just became an adult 🙌 (strict)');

if (age == 18) console.log('You just became an adult 🙌 (loose)');

const favourite = Number(prompt("What's your favourite number"));

console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Wy not 23');

*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

*/

/*

// CODING CHALLENGE #3"

// 1
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

console.log(`Dolphins score is ${scoreDolphins}`);
console.log(`Koalas score is ${scoreKoalas}`);

// 2
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins are the winners 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koaloas are the winners 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('It was a draw');
} else if (scoreDolphins < 100 || scoreKoalas < 100) {
    console.log('Teams scored below 100');
}

*/

/*

const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
        break;
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}

*/

const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log("I like to drink water 💦");

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💦';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);