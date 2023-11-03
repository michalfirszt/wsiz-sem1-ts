// let email1 = 'example.com'
// let email2 = 'test.com'
// let email3 = 'something.com'

// function: return new array with 1000 elements: 0-999
const createArray = (arrayCount: number) => {
    let createdArray: number[] = [];

    for (let index = 0; index < arrayCount; index++) {
        createdArray.push(index)
    }

    return createdArray
}

const exampleArray = createArray(10)

exampleArray.forEach((item, index) => {
    console.log('item value:' + item)
})

// let emails: string[] = ['example.com', 'test.com', 'something.com']

// emails.unshift('student.com')
// emails.push('student2.com')

// console.log(emails)
