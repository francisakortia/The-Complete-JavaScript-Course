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

/*

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

*/

/*

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Francis';
const francis = [firstName, 'Akortia', 2037 - 1991, 'Developer', friends];

console.log(francis);
console.log(francis.length);

//Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

*/

/*

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Michael')) {
    console.log('You have a friend called Michael');
}

*/

/*

// Coding Challenge 2
function calcTip(bill) {
    if (bill>= 50 && bill <=300) {
        let tip = .15 * bill
        return tip;
    } else {
        let tip = .20 * bill
        return tip;
    }
}

const calcTip1 = function(bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : bill * 0.2;
}

console.log(calcTip(100));
console.log(calcTip1(100));

let bills = [125, 555, 44];

const tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[bills.length-1]));
console.log(tips);

const tips1 = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
console.log(tips1);

const total = [];
total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);
console.log(total);

const total1 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total1);

*/

/*
const francis = {
    firstName: 'Francis',
    lastName: 'Akortia',
    age: 2037 - 1980,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven']
};

*/

/*

const francis = {
    firstName: 'Francis',
    lastName: 'Akortia',
    age: 2037 - 1980,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(francis);

console.log(francis.lastName);
console.log(francis['lastName']);

const nameKey = 'Name';
console.log(francis['first' + nameKey]);
console.log(francis['last' + nameKey]);

// console.log(francis.'first' + nameKey);

const interestedIn = prompt('What do you want to know about Francis? Choose between firstName, lastName, age, job and friends');


if (francis[interestedIn]) {
    console.log(francis[interestedIn]);
} else {
    console.log('Wrong request. Choose between firstName, lastName, age, job and friends');
}

francis.location = 'USA';
francis['twitter'] = '@francis';
console.log(francis);

// Challenge
// "Francis has 3 friends, and his best friend is called Michael"

console.log(`${francis.firstName} has ${francis.friends.length} friends, and his best friend is called ${francis.friends[0]}`);

*/

/*

const francis = {
    firstName: 'Francis',
    lastName: 'Akortia',
    birthYear: 1984,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age ;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${(this.hasDriversLicense)?"a":"no"} driver's license`
    }
};

console.log(francis.calcAge());

console.log(francis.age);
console.log(francis.age);
console.log(francis.age);

// Challenge
// "Francis is a 53-year old developer, and he has a driver's license"

console.log(`${francis.firstName} is a ${francis.calcAge()}-year old ${francis.job}, and he has ${(francis.hasDriversLicense) ? "a" : "no"} driver's license`);

console.log(francis.getSummary());

*/

/*

// CODING CHALLENGE 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`)
} else if (john.BMI > mark.BMI) {
    console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`)
}

*/

/*

// console.log('Lifting weights repitition 1');
// console.log('Lifting weights repitition 2');
// console.log('Lifting weights repitition 3');
// console.log('Lifting weights repitition 4');
// console.log('Lifting weights repitition 5');
// console.log('Lifting weights repitition 6');
// console.log('Lifting weights repitition 7');
// console.log('Lifting weights repitition 8');
// console.log('Lifting weights repitition 9');
// console.log('Lifting weights repitition 10');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
    
}

*/

/*

const francisArray = [
    'Francis',
    'Akortia',
    2037 - 1984,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < francisArray.length; i++) {
    console.log(francisArray[i], typeof francisArray[i]);
    
   // types[i] = typeof francisArray[i];
    types.push(typeof francisArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ----')
for (let i = 0; i < francisArray.length; i++) {
    if (typeof francisArray[i] !== 'string') continue;
    console.log(francisArray[i], typeof francisArray[i]); 
}

console.log('---- BREAK WITH NUMBER ----')
for (let i = 0; i < francisArray.length; i++) {
    if (typeof francisArray[i] === 'number') break;
    console.log(francisArray[i], typeof francisArray[i]); 
}

*/

/*

const francis = [
    'Francis',
    'Akortia',
    2037 - 1984,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = francis.length - 1; i >= 0; i--) {
    console.log(i, francis[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------Starting Excercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weigt repetition ${rep}`)
    }
}

*/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);

}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end..');
}