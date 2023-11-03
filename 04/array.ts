const createArrayItems = (arrayCount: number) => {
    let createdArray: number[] = [];

    for (let index = 0; index < arrayCount; index++) {
        createdArray.push(index)
    }

    return createdArray
}

const testArray = createArrayItems(10)

testArray.forEach((item, index) => {
    console.log('item value:' + item)
})

// create function: sumArray
// argument: array type: array of numbers
// return: sum of the numbers
