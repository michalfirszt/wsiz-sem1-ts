const readlineSync = require('readline-sync');

// random number: 0 -> 100
// console.log(Math.round(Math.random() * 100));

// const sendNotification = (name: string): string => {
//     return `Hello there general ${name}`
// }

// type Notification = {
//     send: () => string
// }

// #1
// Find the number
// random number: 0 -> 100
// console: set the number
// answer validation
// -> success message to user :) , close app
// -> wrong number, smaller or greater than rundom number
//   -> ask again

// #2
// readline custom options without setDefaultOptions
// validateConsoleAnswer
// arg1: consoleAnswer string
// arg2: options Array of strings

const validateConsoleAnswer = (consoleAnswer: string, options: string[]) => {
    if (options.includes(consoleAnswer)) {
        console.log(':)');
    } else {
        console.log(':(')
    }
}

const exampleOptions = ['plus', 'minus', 'multiplay']
const userAnswer = readlineSync.question('Your answer:') as string

validateConsoleAnswer(userAnswer, exampleOptions)
