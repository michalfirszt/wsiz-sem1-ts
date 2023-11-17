const createArrayItems = (arrayCount: number) => {
    let createdArray: number[] = [];

    for (let index = 0; index < arrayCount; index++) {
        createdArray.push(index)
    }

    return createdArray
}

// const testArray = createArrayItems(10)

// testArray.forEach((item, index) => {
//     console.log('item value:' + item)
// })

// create function: sumArray
// argument: array type: array of numbers
// return: sum of the numbers

const sumArray = (numberArray: number[]) => {
    let sum: number = 0;

    numberArray.forEach((element) => {
        sum = sum + element
    })

    return sum
}
// console.log(sumArray([4, 5, 2]))

const multiplayNumbers = (numberArray: number[]) => {
    const result = numberArray.map((element) => {
       return element * 2
    })

    return result
}

// console.log(multiplayNumbers([2, 4, 5]));

// function: getWelcomeMessages
// return: array of strings

const getWelcomeMessages = (names: string[]) => {
    const messages = names.map((element) => {
        return `Welcome ${element}, nice to see you :)`
    })

    return messages
}

// console.log(getWelcomeMessages(['John', 'Jeff']))

// create function: range
// arg1: number -> 16
// arg2: number -> 456
// return: array of numbers -> [16...456]

// arg1: 10
// arg2: 1
// return: array of numbers -> [10...1]

function range(startNumber: number, endNumber: number): number[] {
    console.log({ startNumber, endNumber });

    let resultArray: Array<number> = []

    if (startNumber > endNumber) {
        // index++ index = index + 1
        // index-- index = index - 1
        for (let index = startNumber; index >= endNumber; index--) {
            resultArray.push(index)            
        }
    } else if (startNumber === endNumber) {
        resultArray.push(startNumber)
    } else {
        for (let index = startNumber; index <= endNumber; index++) {
            resultArray.push(index)   
        }
    }

    return resultArray
}

const consoleInput = 'example'

range(1, 10)

if (isNaN(Number(consoleInput))) {
    console.log('console input type error')
} else {
    range(12, Number(consoleInput))
}
