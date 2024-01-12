const input = document.getElementById('input') as HTMLInputElement;
const inputContent = document.getElementById('input-content') as HTMLDivElement;
const showContentButton = document.getElementById('show-content-button') as HTMLButtonElement;

inputContent.innerHTML = input.value;

showContentButton.addEventListener('click', () => {
    inputContent.innerHTML = input.value;
})

// input.addEventListener('keyup', (event) => {
//     const targetInput = event.target as HTMLInputElement;

//     inputContent.innerHTML = targetInput.value;
// });

// Modify the code above
// 1. add content to div only after button click
// 2. content is equal to input value
