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




// let displayValue = display.textContent;



// let numOne = currentValue;
let numTwo = 4;
let operator = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
}



const add = function(a, b){
  return a + b;
}

const subtract = function(a, b){
  return a - b;
}

const multiply = function(a, b){
  return a * b;
}

const divide = function(a, b){
  return a / b;
}

// console.log(add(numOne, numTwo));
// console.log(subtract(2, 1));
// console.log(multiply(2, 2));
// console.log(divide(12, 2));


const operate = function(num1, op, num2){
  if(op === operator.add){
    return add(num1, num2);
  } else if(op === operator.subtract){
    return subtract(num1, num2);
  } else if(op === operator.multiply){
    return multiply(num1, num2);
  } else if(op === operator.divide){
    return divide(num1, num2);
  }
}

// console.log(operate(numOne, operator.add, numTwo));

let currentValue = [];

const displayValue = function(){
  let number = currentValue.toString().split(',').join('');
  return display.textContent = number;
}


btn_0.addEventListener('click', () => {
  currentValue.push(0);
  displayValue();
})

btn_1.addEventListener('click', () => {
  currentValue.push(1);
  displayValue();
})

btn_2.addEventListener('click', () => {
  currentValue.push(2);
  displayValue();
})

btn_3.addEventListener('click', () => {
  currentValue.push(3);
  displayValue();
})

btn_4.addEventListener('click', () => {
  currentValue.push(4);
  displayValue();
  // display.textContent = 4;
  // if(currentValue >= 0) {
  //   currentValue = 4;
  // }
})

btn_5.addEventListener('click', () => {
  currentValue.push(5);
  displayValue();
  // display.textContent = 5;
  // if(currentValue >= 0) {
  //   currentValue = 5;
  // }
})

btn_6.addEventListener('click', () => {
  currentValue.push(6);
  displayValue();
  // display.textContent = 6;
  // if(currentValue >= 0) {
  //   currentValue = 6;
  // }
})

btn_7.addEventListener('click', () => {
  currentValue.push(7);
  displayValue();
  // display.textContent = 7;
  // if(currentValue >= 0) {
  //   currentValue = 7;
  // }
})

btn_8.addEventListener('click', () => {
  currentValue.push(8);
  displayValue();
  // display.textContent = 8;
  // if(currentValue >= 0) {
  //   currentValue = 8;
  // }
  // console.log(currentValue);
})

btn_9.addEventListener('click', () => {
  currentValue.push(9);
  displayValue();
  // display.textContent = 9;
  // if(currentValue >= 0) {
  //   currentValue = 9;
  // }
  // console.log(currentValue);
})

btnClear.addEventListener('click', () => {
  display.textContent = '00000';
  currentValue = [];
})

