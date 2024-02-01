"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  const d = b**2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  const monthlyRate = percent / (100 * 12);
  const payment = (amount - contribution) * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  const totalAmount = (payment * countMonths).toFixed(2);

  return Number(totalAmount);
}