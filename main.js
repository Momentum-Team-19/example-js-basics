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



function basketball(player1, player2) {
    // player1 and player2 are parameters, placeholders for values that will 
    // be given when the function is called
    let player1Score = 0
    let player2Score = 0 

    while (player1Score < 10 && player2Score < 10) {
        console.log(`${player1}: ${player1Score},  ${player2}: ${player2Score}.`)
        let shot = prompt(`Who made that basket, ${player1} or ${player2}?`)
        if (shot === player1) {
            player1Score += 2
        } else if (shot === player2) {
            player2Score += 2
        } else {
            alert('Invalid entry. Please enter ${player1} or ${player2}.')
        }
    }
    console.log(`Game over. ${player1} has ${player1Score} and ${player2} has ${player2Score}.`)
}

// basketball('Jaylan', 'Chris')
// "Jaylan" and "Chris" are arguments that get assigned to player1 and player2
// while the function is running
// placeholder -> parameter, actual -> argument

function kiki() {
    let refrain = "Kiki, do you love me? Are you riding? Say you'll never ever leave from beside me."

    for (let count = 0; count < 4; count++) {
        // use a for loop when you know how many repetitions you want
        console.log(refrain)
    }
}
// kiki()
// functions don't run until they are called

let beastieBoys = ['MCA', 'Ad Rock', 'Mixmaster Mike']
// array is a collection in []
beastieBoys.push('Mike D')
// push is how you add elements to an array
console.log(beastieBoys)
let lastPerson = beastieBoys.pop()
console.log("The last person is:", lastPerson)
// pop 
console.log("Updated array is:", beastieBoys)

let slicedArray = beastieBoys.slice(1, 3)
// slice works like it does with strings (start, end)
 console.log(slicedArray)

let room = ['Davis', 'Jaylan', 'Gavin', 'Chris']
// add Luke to the room and then console log room

let todos = ['take a bath', 'work on calculator', 'feed the baby', 'eat dinner', 'go outside']

for (let todo of todos) {
    console.log(todos.indexOf(todo), todo)
    // for of loops are used with arrays to loop through every item in the array and do something
}

// write a loop that says "Hello, <person>" to every person in room