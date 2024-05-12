const btn_0 = document.querySelector("#btn_0");

const btn_dot = document.querySelector("#btn_dot");

const btnDigit = document.querySelectorAll(".digit");

const btnAdd = document.querySelector("#btnAdd");
const btnSubtract = document.querySelector("#btnSubtract");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnEquals = document.querySelector("#btnEquals");
const btnClear = document.querySelector("#btnClear");
const btnBackspace = document.querySelector("#btnBackspace");

const display = document.querySelector(".display")




let operator = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
};



const add = function(a, b){
  let result = a + b;
  let resultDisplay = result.toString().slice(0, 9);
  return display.textContent = Math.round(resultDisplay * 100) / 100;
};

const subtract = function(a, b){
  let result = a - b;
  return display.textContent = Math.round(result * 100) / 100;
};

const multiply = function(a, b){
  let result = a * b;
  let resultDisplay = result.toString().slice(0, 9);
  return display.textContent = Math.round(resultDisplay * 100) / 100;
};

const divide = function(a, b){
  if(a === 0 || b === 0) {
    return display.textContent = 'lmao';
  } else {
    let result = a / b;
    return display.textContent = Math.round(result * 100) / 100;
  }
};



const operate = function(num1, op, num2){
  if(op === '+'){
    selectedOperator = '';
    return add(num1, num2);
  } else if(op === '-'){
    selectedOperator = '';
    return subtract(num1, num2);
  } else if(op === '*'){
    selectedOperator = '';
    return multiply(num1, num2);
  } else if(op === '/'){
    selectedOperator = '';
    return divide(num1, num2);
  }
};


let currentValue = [];
let displayedNumberMemoryOne = 0;
let displayedNumberMemoryTwo = 0;
let selectedOperator = '';


const displayValueOne = function(){
  let number = currentValue.toString().split(',').join('');
  displayedNumberMemoryOne = Number(number);
  
  return display.textContent = number;
};



const pressBtn = function(number){
  if(currentValue.length < 9){
    currentValue.push(number);
    displayValueOne();
  }
};
  
btnDigit.forEach(function(currentBtn){
  currentBtn.addEventListener('click', (event) => {
  const number = parseInt(event.target.id.split('_')[1]);
  pressBtn(number);
  })
});

addEventListener('keydown', (event) => {
  const key = event.key;
  const number = parseInt(key);
  if(number >= 0 && number <= 9){
    return pressBtn(number);
  } else if(key === 'Backspace'){
    currentValue.pop();
    displayedNumberMemoryOne =  Number(displayedNumberMemoryOne.toString().slice(0, -1));
    return display.textContent = displayedNumberMemoryOne;
  } else if(key === '.'){
    pressBtn('.')
  } else if(key === '='){
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
    currentValue = [];
  }
});



btn_dot.addEventListener('click', () => {
  if(currentValue.length < 9) {
    currentValue.push('.');
    displayValueOne();
  }
})

btn_0.addEventListener('click', () => {
  if(currentValue.length < 9) {
    currentValue.push(0);
    displayValueOne();
  }
})


btnAdd.addEventListener('click', () => {
  if(selectedOperator !== ''){
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
    
  } else if (selectedOperator === '+' || selectedOperator === '-' || selectedOperator === '*' || selectedOperator === '/') {
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
  } 
    currentValue = [];
    displayedNumberMemoryTwo = displayedNumberMemoryOne;
    return selectedOperator = operator.add;
});

btnSubtract.addEventListener('click', () => {
  if(selectedOperator !== ''){
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);

  } else if (selectedOperator === '+' || selectedOperator === '-' || selectedOperator === '*' || selectedOperator === '/') {
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
  } 
    currentValue = [];
    displayedNumberMemoryTwo = displayedNumberMemoryOne;
    return selectedOperator = operator.subtract;
});

btnMultiply.addEventListener('click', () => {
  if(selectedOperator !== ''){
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);

  } else if (selectedOperator === '+' || selectedOperator === '-' || selectedOperator === '*' || selectedOperator === '/') {
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
  } 
    currentValue = [];
    displayedNumberMemoryTwo = displayedNumberMemoryOne;
    return selectedOperator = operator.multiply;
});

btnDivide.addEventListener('click', () => {
  if(selectedOperator !== ''){
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);

  } else if (selectedOperator === '+' || selectedOperator === '-' || selectedOperator === '*' || selectedOperator === '/') {
    operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
    displayedNumberMemoryOne = Number(display.textContent);
  } 
    currentValue = [];
    displayedNumberMemoryTwo = displayedNumberMemoryOne;
    return selectedOperator = operator.divide;
});

btnEquals.addEventListener('click', () => {
  operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
  displayedNumberMemoryOne = Number(display.textContent);
  currentValue = [];
});

btnClear.addEventListener('click', () => {
  display.textContent = '0';
  currentValue = [];
  displayedNumberMemoryOne = 0;
  displayedNumberMemoryTwo = 0;
  selectedOperator = '';
});

btnBackspace.addEventListener('click', () => {
  currentValue.pop();
  displayedNumberMemoryOne =  Number(displayedNumberMemoryOne.toString().slice(0, -1));
  return display.textContent = displayedNumberMemoryOne;
});