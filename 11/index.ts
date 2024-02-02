import { add } from "lodash";

// console.log(add(1, 2));

// #1
// create function to show fibonacci sequence n index value
// fibonacciSequence(8) -> 21

const fibonacciSequence = (index: number): number => {
    if (index === 0) {
        return 0;
    }

    if (index === 1) {
        return 1;
    }

    return add(fibonacciSequence(index - 1), fibonacciSequence(index - 2));
}

console.log(fibonacciSequence(8));

// #2
// create usage examples lodash helpers
// Math, Array, Object, Collection
// 2 examples for each category
