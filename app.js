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

const btnAdd = document.querySelector(".btn_+");
const btnSubtract = document.querySelector(".btn_-");
const btnMultiply = document.querySelector(".btn_*");
const btnDivide = document.querySelector(".btn_/");
const btnEquals = document.querySelector(".btn_=");
const btnClear = document.querySelector(".clear");




let numOne = 2;
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

console.log(add(numOne, numTwo));
console.log(subtract(2, 1));
console.log(multiply(2, 2));
console.log(divide(12, 2));


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

console.log(operate(numOne, operator.add, numTwo));

