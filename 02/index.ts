// function checkArgumentTypeFunction(params: number | string) {
// }

// create function: addNumbers
// 2 arguments
// sum 2 arguments

const checkArgumentType = (params: number | string | null) => {
    if (typeof params === 'number') {
        console.log("Param is number")
    } else {
        console.log(`Param type: ${typeof params}`)
    }
}

// const addNumbers = (number1: number, number2: number): number => {
//     const result: number = number1 + number2

//     return result
// }

// const functionResult = addNumbers(1, 2)

// console.log(functionResult)

// checkArgumentType(2)
// checkArgumentType('Hello')
// checkArgumentType(null)
