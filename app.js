const btn_0 = document.querySelector(".btn_0");
const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
const btn_3 = document.querySelector(".btn_3");
const btn_4 = document.querySelector(".btn_4");
const btn_5 = document.querySelector(".btn_5");
const btn_6 = document.querySelector(".btn_6");
const btn_7 = document.querySelector(".btn_7");
const btn_8 = document.querySelector(".btn_8");
const btn_9 = document.querySelector(".btn_9");

const btnAdd = document.querySelector(".btnAdd");
const btnSubtract = document.querySelector(".btnSubstract");
const btnMultiply = document.querySelector(".btnMultiply");
const btnDivide = document.querySelector(".btnDivide");
const btnEquals = document.querySelector(".btnEquals");
const btnClear = document.querySelector(".clear");

const display = document.querySelector(".display")




let operator = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
};



const add = function(a, b){
  let result = a + b;
  return display.textContent = result;
};

const subtract = function(a, b){
  let result = a - b;
  return display.textContent = result;
};

const multiply = function(a, b){
  let result = a * b;
  return display.textContent = result;
};

const divide = function(a, b){
  let result = a / b;
  return display.textContent = result;
};



const operate = function(num1, op, num2){
  if(op === '+'){
    return add(num1, num2);
  } else if(op === '-'){
    return subtract(num1, num2);
  } else if(op === '*'){
    return multiply(num1, num2);
  } else if(op === '/'){
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




btn_0.addEventListener('click', () => {
  currentValue.push(0);
  displayValueOne();
  
});

btn_1.addEventListener('click', () => {
  currentValue.push(1);
  displayValueOne();
});

btn_2.addEventListener('click', () => {
  currentValue.push(2);
  displayValueOne();
});

btn_3.addEventListener('click', () => {
  currentValue.push(3);
  displayValueOne();
});

btn_4.addEventListener('click', () => {
  currentValue.push(4);
  displayValueOne();
});

btn_5.addEventListener('click', () => {
  currentValue.push(5);
  displayValueOne();
});

btn_6.addEventListener('click', () => {
  currentValue.push(6);
  displayValueOne();
});

btn_7.addEventListener('click', () => {
  currentValue.push(7);
  displayValueOne();
});

btn_8.addEventListener('click', () => {
  currentValue.push(8);
  displayValueOne();
});

btn_9.addEventListener('click', () => {
  currentValue.push(9);
  displayValueOne();
});



btnAdd.addEventListener('click', () => {
  currentValue = [];
  displayedNumberMemoryTwo = displayedNumberMemoryOne;
  return selectedOperator = operator.add;
});

btnSubtract.addEventListener('click', () => {
  currentValue = [];
  displayedNumberMemoryTwo = displayedNumberMemoryOne;
  return selectedOperator = operator.subtract;
});

btnMultiply.addEventListener('click', () => {
  currentValue = [];
  displayedNumberMemoryTwo = displayedNumberMemoryOne;
  return selectedOperator = operator.multiply;
});

btnDivide.addEventListener('click', () => {
  currentValue = [];
  displayedNumberMemoryTwo = displayedNumberMemoryOne;
  return selectedOperator = operator.divide;
});

btnEquals.addEventListener('click', () => {
  operate(displayedNumberMemoryTwo, selectedOperator, displayedNumberMemoryOne);
});

btnClear.addEventListener('click', () => {
  display.textContent = '00000';
  currentValue = [];
});

