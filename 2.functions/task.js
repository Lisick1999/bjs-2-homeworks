function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length <= 0) {
    return 0
  }
  
  const sum = 0;
  const sumWithInitial = [...arr].reduce(
    (accumulator, currentValue) => accumulator + currentValue, sum,
  );
  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  if (arr.length <= 0) {
    return 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length <= 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length <= 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length-1; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
