const readlineSync = require('readline-sync');

const options = ['Mike', 'John', 'Jeff', 'end']

readlineSync.setDefaultOptions({ limit: options });

// const askUserAboutName = () => {
//     let userName = readlineSync.question('May I have your name? ');

//     console.log(userName);

//     if (userName === 'end') {
//         console.log('thanks :)');
//     } else {
//         askUserAboutName()
//     }
// }

// askUserAboutName()

// #1 create function: createArray

// console ask user about number
// add number type validation
// ask every time again
// add exit from script if 'end'

// no arguments
// return [0, 1, 2, 3, 4, 5, 6]

const createNumberArray = () => {
    const userNumber = readlineSync.question('Set number:') as string

    if (userNumber === 'end') {
        return
    }

    if (isNaN(Number(userNumber))) {
        console.log('invalid type');
    } else {
        const result = []

        for (let index = 0; index < Number(userNumber); index++) {
            result.push(index)
        }

        console.log(result);
    }

    createNumberArray()
}

createNumberArray()
