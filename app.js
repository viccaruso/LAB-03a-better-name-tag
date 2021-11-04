const displayNameEl = document.getElementById('display-name');
const nameInputEl = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

console.log(displayNameEl);
console.log(nameInputEl);
console.log(nameButton);

// const userInput = userInputEl.value;

nameButton.addEventListener('click', () => {
    const userInput = nameInputEl.value;
    console.log('Button was clicked');
    displayNameEl.textContent = userInput;
    console.log(`Name displayed is now ${displayNameEl.textContent}`)
})

const top = document.getElementById('hello-my-name-is');
const bottom = document.getElementById('empty-bottom');

const pinkButton = document.getElementById('color-button-pink');
const greenButton = document.getElementById('color-button-green');
const yellowButton = document.getElementById('color-button-yellow');
const magentaButton = document.getElementById('color-button-magenta');
const blueButton = document.getElementById('color-button-blue');

console.log(top);

pinkButton.addEventListener('click', () => {
    top.style.backgroundColor = 'pink';
    bottom.style.backgroundColor = 'pink';
})

greenButton.addEventListener('click', () => {
    top.style.backgroundColor = 'green';
    bottom.style.backgroundColor = 'green';
})

yellowButton.addEventListener('click', () => {
    top.style.backgroundColor = 'yellow';
    bottom.style.backgroundColor = 'yellow';
})

magentaButton.addEventListener('click', () => {
    top.style.backgroundColor = 'magenta';
    bottom.style.backgroundColor = 'magenta';
})

blueButton.addEventListener('click', () => {
    top.style.backgroundColor = 'blue';
    bottom.style.backgroundColor = 'blue';
})