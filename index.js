const elementList = document.querySelectorAll('.element-container');
const numberDisplay = document.getElementById('display-container');
const resetButton = document.getElementById('reset-button');
const backspaceButton = document.getElementById('delete-button');
const arrayOperators = document.getElementsByClassName('operator-button');
const equalButton = document.getElementById('equal-button');

// Function to add the numbers to the display
function displayCharacters(e) {
  const elementClicked = e.target.innerText;
  numbersArray = [...numbersArray, elementClicked];
  numberDisplay.innerText = numbersArray.join('');
  console.log(numbersArray);
}
// Display the value of the clicked button
let numbersArray = [];

elementList.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.innerText === '0' && numbersArray.length == 0) {
      console.log('Soy un 0');
    } else if (e.target.innerText !== '0' && numbersArray.length >= 0) {
      console.log(numbersArray);
      console.log('Agregando numero');
      displayCharacters(e);
    } else {
      displayCharacters(e);
    }
    e.preventDefault();
  });
});

// Display the operators
Array.from(arrayOperators).forEach((operator) => {
  operator.addEventListener('click', (e) => {
    displayCharacters(e);
    console.log(e.target.innerText);
    e.preventDefault();
  });
});

// Reset the value display
resetButton.addEventListener('click', () => {
  numberDisplay.innerText = 0;
  numbersArray = [];
  console.log(numbersArray);
});

//Backspace function
backspaceButton.addEventListener('click', () => {
  numbersArray.pop();
  numbersArray = [...numbersArray];
  numberDisplay.innerText = numbersArray.join('');
});

// For test algorithm
equalButton.addEventListener('click', () => {
  numbersArray.map((element, index) => {
    if (
      element === '*' ||
      element === '+' ||
      element === '-' ||
      element === '/'
    ) {
      console.log(index);
      getNumber(index, element);
      // operationFunction(element, index, enteredNumber);
    }
  });
});

// Function to get the number inputted from the array of numbers
function getNumber(index, element) {
  for (let j = 0; j < numbersArray.length; j++) {
    if (
      element !== '+' ||
      element !== '-' ||
      element !== '*' ||
      element !== '/'
    ) {
      let newNumbersArray = [];
      for (let i = 0; i < index; i++) {
        newNumbersArray = [...numbersArray];
        // console.log(newNumbersArray);
      }
      newNumbersArray.join('');
      console.log(newNumbersArray);
    } // XD NO ME SALE
  }
  // console.log(newNumbersArray);
}
