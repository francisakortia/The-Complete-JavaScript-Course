'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;

*/

/*

function logger() {
    console.log('My name is Francis');
}

// Calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/


/*
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;

}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age2, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Francis'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`)
        return -1;
    }

    
   
}
console.log(yearsUntilRetirement(1991, 'Francis'));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/

// CODING CHALLENGE #1

//Question 1
let calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3)

//Question 2
let avgDolphin = calcAverage(85, 54, 41);
let avgKoala = calcAverage(23, 34, 27);

//Question 3
function checkWinner(avgDolphin, avgKoala) {
    if (avgDolphin >= (2 * avgKoala)) {
        console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`)
    } else if (avgKoala >= (2 * avgDolphin)) {
        console.log(`Koalas win (${avgKoala} vs ${avgDolphin})`)
    } else {
        console.log(`No team wins`)
    }
}

//Question 4
checkWinner(avgDolphin, avgKoala);