const numbersString = '1,4,6,2';

const sortResult = 
numbersString.split(',')
            .map((number) => Number(number))
            .sort((a, b) => {
    return a - b;
})

console.log(sortResult);
