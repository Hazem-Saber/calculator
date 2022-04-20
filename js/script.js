'use strict';

//  ==================== Selecting Elements ====================
const screen = document.querySelector('.screen');
const btnNumber = document.querySelectorAll('.number');
const btnMath = document.querySelectorAll('.math');
const btnClear = document.querySelector('.clear');
const btnEqual = document.querySelector('.equal');
const btnsContainer = document.querySelector('.btns');
const allBtns = document.querySelectorAll('.btn');
//  ==================== Starting Conditions ====================
let firstNumber, secondNumber, mathOperation, result;

const startingConditions = function() {
  screen.textContent = 0;
  firstNumber = '';
  secondNumber = '';
  mathOperation = '';
  result = '';
}
startingConditions();

const disbleBtns = function() {
  for(let i = 0; i < allBtns.length; i++) {
    if (!allBtns[i].classList.contains('clear')) {
      allBtns[i].classList.add('disabled')
    }
  }
  btnsContainer.classList.add('first-number');
}
//  ==================== Store Numbers Values ====================
for(let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener('click', function() {
    if (btnsContainer.classList.contains('first-number')) {
      firstNumber += btnNumber[i].textContent;
      screen.textContent = firstNumber;
    } else {
      secondNumber += btnNumber[i].textContent;
      screen.textContent = secondNumber;
    }
  });
};
//  ==================== Math Operation ====================
for(let i = 0; i < btnMath.length; i++) {
  btnMath[i].addEventListener('click', function() {
    mathOperation = '';
    mathOperation = btnMath[i].textContent;
    screen.textContent = mathOperation;
    btnsContainer.classList.remove('first-number');
  });
};
//  ==================== Calculation Fynctionality ====================
btnEqual.addEventListener('click', function() {
  switch (mathOperation) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber);
      screen.textContent = result;
      disbleBtns();
      break
    case '-':
      result = Number(firstNumber) - Number(secondNumber);
      screen.textContent = result;
      disbleBtns();
      break
    case 'x':
      result = Number(firstNumber) * Number(secondNumber);
      screen.textContent = result;
      disbleBtns();
      break
    case '÷':
      result = Number(firstNumber) / Number(secondNumber);
      screen.textContent = result;
      disbleBtns();
      break
    default:
      console.log('Please Enter Valid Action');
  };
});
//  ==================== Clear ====================
btnClear.addEventListener('click', function() {
  startingConditions();

  for(let i = 0; i < allBtns.length; i++) {
    if (!allBtns[i].classList.contains('clear')) {
      allBtns[i].classList.remove('disabled')
    }
  }
});
