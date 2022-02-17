const numberList = document.querySelectorAll('[data-number]');
const previousNumberDisplay = document.querySelector('[data-previous-operand]');
const currentNumberDisplay = document.querySelector('[data-current-operand]');
const resetButton = document.querySelector('[data-reset-button]');
const backspaceButton = document.querySelector('[data-delete-button');
const arrayOperators = document.querySelectorAll('[data-operator-button');
const equalButton = document.querySelector('[data-equal-button');
const operatorButtonArray = document.querySelectorAll('[data-operator-button]');

// This function is to remove the last character from the previous number
function removeLastCharacter() {
  let originalPreviousNumber = previousNumberDisplay.innerText.toString(); // This number has the operator as the last character
  let previousNumber = originalPreviousNumber.slice(
    0,
    originalPreviousNumber.length - 1
  );
  return previousNumber; // Here i remove the last character, which is the operator
}

// Display the previous operand in another div
let operatorClicked = '';
let firstOperation = true;
let operationCounter = 0;
let errorDivision = false;

Array.from(operatorButtonArray).forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    if (currentNumberDisplay.innerText === '0') return;
    if (firstOperation && operationCounter == 0) {
      operatorClicked = operatorButton.innerText.toString();
      previousNumberDisplay.innerText =
        currentNumberDisplay.innerText + operatorButton.innerText;
      currentNumberDisplay.innerText = '0';
      firstOperation = false;
      operationCounter += 1;
    } else if (!firstOperation) {
      let previousNumber = removeLastCharacter();
      let operationResult = calculateOperation(
        currentNumberDisplay.innerText,
        previousNumber,
        operatorClicked
      );
      operatorClicked = operatorButton.innerText;
      operationCounter += 1;
      currentNumberDisplay.innerText = operationResult;
      previousNumberDisplay.innerText = operationResult + operatorClicked;
    }
    e.preventDefault();
  });
});

// Display the numbers clicked
Array.from(numberList).forEach((number) => {
  number.addEventListener('click', (e) => {
    let number = e.target.innerText.toString();
    if (currentNumberDisplay.innerText === '0' && number.innerText === '0')
      return;
    if (currentNumberDisplay.innerText === '0') {
      currentNumberDisplay.innerText = '';
    }
    if (operationCounter > 1 && !firstOperation) {
      currentNumberDisplay.innerText = '';
      operationCounter -= 1;
    }
    if (errorDivision) {
      currentNumberDisplay.innerText = '';
      previousNumberDisplay.innerText = '';
      errorDivision = false;
      firstOperation = true;
      operationCounter = 0;
    }
    currentNumberDisplay.innerText += number;
    e.preventDefault();
  });
});

// Make the calc function and the equal button logic
equalButton.addEventListener('click', (e) => {
  // console.log(currentNumberDisplay.innerText);
  // console.log(previousNumberDisplay.innerText);
  let operatorClicked = previousNumberDisplay.innerText.toString().substr(-1);
  let previousNumber = removeLastCharacter();
  console.log(operatorClicked);
  if (currentNumberDisplay.innerText === '0' && operatorClicked === '/') {
    currentNumberDisplay.innerText = 'Error.';
    previousNumberDisplay.innerText = 'Cannot divide by 0';
    errorDivision = true;
    return;
  }
  let operationResult = calculateOperation(
    currentNumberDisplay.innerText,
    previousNumber,
    operatorClicked
  );
  currentNumberDisplay.innerText = operationResult;
  previousNumberDisplay.innerText = '';
  firstOperation = true;
  operationCounter = 0;
});

function calculateOperation(n1, n2, operator) {
  let operationResult = 0;
  if (operator === '/') {
    operationResult = parseInt(n2) / parseInt(n1);
    return operationResult;
  }
  if (operator === '+') {
    operationResult = parseInt(n1) + parseInt(n2);
    return operationResult;
  }
  if (operator === '-') {
    operationResult = parseInt(n2) - parseInt(n1);
    return operationResult;
  }
  if (operator === '*') {
    operationResult = parseInt(n1) * parseInt(n2);
    return operationResult;
  }
}

// Reset the value display
resetButton.addEventListener('click', () => {
  currentNumberDisplay.innerText = 0;
  previousNumberDisplay.innerText = '';
  firstOperation = true;
  operationCounter = 0;
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
    operationCounter = 0;
    firstOperation = true;
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
