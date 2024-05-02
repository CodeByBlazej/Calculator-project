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

