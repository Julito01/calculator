const numberList = document.querySelectorAll('[data-number]');
const previousNumberDisplay = document.querySelector('[data-previous-operand]');
const currentNumberDisplay = document.querySelector('[data-current-operand]');
const resetButton = document.querySelector('[data-reset-button]');
const backspaceButton = document.querySelector('[data-delete-button');
const arrayOperators = document.querySelectorAll('[data-operator-button');
const equalButton = document.querySelector('[data-equal-button');
const operatorButtonArray = document.querySelectorAll('[data-operator-button]');

// Display the numbers clicked
Array.from(numberList).forEach((number) => {
  number.addEventListener('click', (e) => {
    if (currentNumberDisplay === '0' && number.innerText === '0') return;
    if (currentNumberDisplay.innerText === '0') {
      currentNumberDisplay.innerText = '';
    }
    currentNumberDisplay.innerText =
      currentNumberDisplay.innerText.toString() + e.target.innerText.toString();
    e.preventDefault();
  });
});

// Display the previous operand in another div
Array.from(operatorButtonArray).forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    console.log(operatorButton.innerText);
    e.preventDefault();
  });
});

// Reset the value display
resetButton.addEventListener('click', () => {
  currentNumberDisplay.innerText = 0;
  // console.log(numbersArray);
});

//Backspace function
backspaceButton.addEventListener('click', () => {
  let number = currentNumberDisplay.innerText.toString();
  // console.log(number.slice(0, number.length - 1));
  let numberUpdated = number.slice(0, number.length - 1);
  currentNumberDisplay.innerText = numberUpdated;
  if (numberUpdated.length == 0) {
    currentNumberDisplay.innerText = '0';
  }
});

// Function to add the numbers to the display (not useful anymore)
// let numbersArray = [];
// function displayCharacters(e) {
//   const elementClicked = e.target.innerText;
//   numbersArray = [...numbersArray, elementClicked];
//   numberDisplay.innerText = numbersArray.join('');
// console.log(numbersArray);
// }
// Display the value of the clicked button

// numberList.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     if (e.target.innerText === '0' && numbersArray.length == 0) {
//       console.log('Soy un 0');
//     } else if (e.target.innerText !== '0' && numbersArray.length >= 0) {
//       console.log(numbersArray);
//       console.log('Agregando numero');
//       displayCharacters(e);
//     } else {
//       displayCharacters(e);
//     }
//     e.preventDefault();
//   });
// });

// Display the operators
// Array.from(arrayOperators).forEach((operator) => {
//   operator.addEventListener('click', (e) => {
//     displayCharacters(e);
//     console.log(e.target.innerText);
//     e.preventDefault();
//   });
// });

// For test algorithm
// let currentNumber = [];
// equalButton.addEventListener('click', () => {
//   numbersArray.map((element, index) => {
//     if (
//       element !== '*' ||
//       element !== '+' ||
//       element !== '-' ||
//       element !== '/'
//     ) {
//       currentNumber = [...currentNumber, element];
//       console.log(currentNumber);
//       // getNumber(index, element);
//       // operationFunction(element, index, enteredNumber);
//     } else {
//       currentNumber = [];
//     }
//   });
// });

// // Function to get the number inputted from the array of numbers
// function getNumber(index, element) {
//   for (let j = 0; j < numbersArray.length; j++) {
//     if (
//       element !== '+' ||
//       element !== '-' ||
//       element !== '*' ||
//       element !== '/'
//     ) {
//       let newNumbersArray = [];
//       for (let i = 0; i < index; i++) {
//         newNumbersArray = [...numbersArray];
//         // console.log(newNumbersArray);
//       }
//       newNumbersArray.join('');
//       console.log(newNumbersArray);
//     }
//   }
//   // console.log(newNumbersArray);
// }
