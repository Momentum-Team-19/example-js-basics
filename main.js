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

// console.log(`It is ${degreesHotter} degrees hotter in Florida than in Michigan`)

let degreesCoolerTomorrow = 10
let degreesHotterTomorrow = 5

let tomorrowMiTemp = michTemp - degreesCoolerTomorrow
// console.log(`It will be ${tomorrowMiTemp} degrees tomorrow in Michigan`) 

let tomorrowFlaTemp = flaTemp + degreesHotterTomorrow
// console.log(`It will be ${tomorrowFlaTemp} degrees in Florida tomorrow`)

let freeThrowPercentage = 8 / 10 * 100
// console.log(`Jaylan's free throw percentage is ${freeThrowPercentage} percent`)

let peopleInGym = 23
let teamSize = 5
let leftOver = peopleInGym % teamSize
// % modulo tells us how many are left over after dividing a number evenly
// console.log(`There are ${leftOver} people left over after everyone is split into teams`)

let side = 20
let gardenArea = side ** 2
// ** means 'to the power of'
// console.log(`The area of this square shaped garden is ${gardenArea} feet`)

let score = 0
// let madeFreeThrow = prompt('Did they make their free throw? y/n')

// if (madeFreeThrow === 'y') {
//     score += 1
// } else {
//     score += 0
// }

// console.log(`The team's score is ${score}`)
let word = ''

// while (word.length < 3 || word.length > 8) {
//     // the actions inside the { } repeat until the expression in the () stops being true
//     word = prompt('Enter a word: ')
//     // stores the word that the user enters in a variable called word
//     if (word.length < 3) {
//         alert('This word is too short.')
//     } else if (word.length > 8) {
//         alert("This word is too long.")
//     }
// }   

// alert("This word length is just right.")

// let life = 20

// while (life > 0) {
//     console.log(`You are still playing. Your life is ${life}`)
//     life -= 2
//     // decrement (goes down by 2 each time)
// }

// console.log("Oh, no! I ran out of life. How did I get here?")

function basketball() {
    let player1Score = 0
    let player2Score = 0

    while (player1Score < 10 && player2Score < 10) {
        console.log(`Player 1: ${player1Score}  Player 2: ${player2Score}.`)
        let shot = prompt("Who made that basket, 1 or 2?")
        if (shot === '1') {
            player1Score += 2
        } else if (shot === '2') {
            player2Score += 2
        } else {
            alert('Invalid entry. Please enter 1 or 2.')
        }
    }
    console.log(`Game over. Player 1 has ${player1Score} and Player 2 has ${player2Score}.`)
}

function kiki() {
    let refrain = "Kiki, do you love me? Are you riding? Say you'll never ever leave from beside me."

    for (let count = 0; count < 4; count++) {
        // use a for loop when you know how many repetitions you want
        console.log(refrain)
    }
}
// kiki()
// functions don't run until they are called
basketball()