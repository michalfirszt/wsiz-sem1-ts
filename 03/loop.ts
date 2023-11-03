// index++
// index = index + 1

// create function to run FizzBuzz
const displayLoopExample = () => {
    for (let index = 0; index < 10; index++) {
        console.log(index + 1);
    }
}

// displayLoopExample()

// #1 display all 100 numbers
// #2 inside the 'for' logic increment index
// #3 check if we can display FizzBuzz -> 3 && 5
 // display FizzBuzz

// #4 check if we can display Fizz -> 3
 // display Fizz

// #5 check if we can display Buzz -> 5
 // display Buzz

const displayFizzBuzz = (loopCount: number = 100) => {
    for (let index = 0; index < loopCount; index++) {
        let result = index + 1
        if (result % 3 === 0 && result % 5 === 0) {
            console.log('FizzBuzz')
        } else if (result % 3 === 0) {
            console.log('Fizz')
        } else if (result % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(result)
        }
    }
}

// display 100
displayFizzBuzz()

// display 500
// displayFizzBuzz(500)
