// #1
const addButton = document.getElementById('add-numbers-button') as HTMLButtonElement;

addButton.addEventListener('click', () => {
    const firstInput = document.getElementById('first-number') as HTMLInputElement;
    const secondInput = document.getElementById('second-number') as HTMLInputElement;
    const resultDiv = document.getElementById('add-numbers-result') as HTMLDivElement;
    const result = Number(firstInput.value) + Number(secondInput.value);

    resultDiv.innerHTML = String(result);
})

// #2
const selectInput = document.getElementById('factorial-number') as HTMLSelectElement;

const factorial = (n: number): number => {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

selectInput.addEventListener('change', (event) => {
    const eventTargerSelect = event.target as HTMLSelectElement;
    const resultDiv = document.getElementById('factorial-result') as HTMLDivElement;
    const result = factorial(Number(eventTargerSelect.value));

    resultDiv.innerHTML = String(result);
});
