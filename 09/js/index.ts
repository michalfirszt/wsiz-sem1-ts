export const addNumbers = (a: number, b: number): number => {
    return a + b;
}

export const factorial = (n: number): number => {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

// #1
const addButton = document.getElementById('add-numbers-button') as HTMLButtonElement;

addButton.addEventListener('click', () => {
    const firstInput = document.getElementById('first-number') as HTMLInputElement;
    const secondInput = document.getElementById('second-number') as HTMLInputElement;
    const resultDiv = document.getElementById('add-numbers-result') as HTMLDivElement;
    const result = addNumbers(Number(firstInput.value), Number(secondInput.value))

    resultDiv.innerHTML = String(result);
})

// #2
const selectInput = document.getElementById('factorial-number') as HTMLSelectElement;

selectInput.addEventListener('change', (event) => {
    const eventTargerSelect = event.target as HTMLSelectElement;
    const resultDiv = document.getElementById('factorial-result') as HTMLDivElement;
    const result = factorial(Number(eventTargerSelect.value));

    resultDiv.innerHTML = String(result);
});
