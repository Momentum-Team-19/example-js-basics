let favoriteTeam
// variables store values
favoriteTeam = 'Lakers'
favoriteTeam = "Hawks"
// console.log(favoriteTeam)
// console.log prints values 

const foreverTeam = 'Lakers';
// const makes it so you can't change the value of the variable - constant
// can't do this -> foreverTeam = 'Hawks'
// console.log(foreverTeam)

let name = 'Gavin';
// console.log(`Hello, ${name}`)
// this is called a template literal, lets us mix variables and text

// declare a variable called color and then log in the console
// "My favorite color is <color>" where <color> is the color you
//assigned to the variable. Use a template literal.

// examples using basic math
let michTemp = 72;
let flaTemp = 93;

let degreesHotter = flaTemp - michTemp;

console.log(`It is ${degreesHotter} degrees hotter in Florida than in Michigan`)

let degreesCoolerTomorrow = 10
let degreesHotterTomorrow = 5

let tomorrowMiTemp = michTemp - degreesCoolerTomorrow
console.log(`It will be ${tomorrowMiTemp} degrees tomorrow in Michigan`) 

let tomorrowFlaTemp = flaTemp + degreesHotterTomorrow
console.log(`It will be ${tomorrowFlaTemp} degrees in Florida tomorrow`)

let freeThrowPercentage = 8 / 10 * 100
console.log(`Jaylan's free throw percentage is ${freeThrowPercentage} percent`)

let peopleInGym = 23
let teamSize = 5
let leftOver = peopleInGym % teamSize
// % modulo tells us how many are left over after dividing a number evenly
console.log(`There are ${leftOver} people left over after everyone is split into teams`)

let side = 20
let gardenArea = side ** 2
// ** means 'to the power of'
console.log(`The area of this square shaped garden is ${gardenArea} feet`)

let score = 0
let madeFreeThrow = prompt('Did they make their free throw? y/n')

if (madeFreeThrow === 'y') {
    score += 1
} else {
    score += 0
}

console.log(`The team's score is ${score}`)