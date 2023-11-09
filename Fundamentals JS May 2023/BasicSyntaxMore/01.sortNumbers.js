function sortNumbers(numOne, numTwo, numThree) {
  let maxNum = 0;
  let secondNum = 0;
  let thirdNum = 0;
  if (numOne > numTwo && numOne > numThree) {
    maxNum = numOne;
    if (numThree > numTwo) {
      secondNum = numThree;
      thirdNum = numTwo;
    } else {
      secondNum = numTwo;
      thirdNum = numThree;
    }
  } else if (numTwo > numOne && numTwo > numThree) {
    maxNum = numTwo;
    if (numThree > numOne) {
      secondNum = numThree;
      thirdNum = numOne;
    } else {
      secondNum = numOne;
      thirdNum = numThree;
    }
  } else {
    maxNum = numThree;
    if (numTwo > numOne) {
      secondNum = numTwo;
      thirdNum = numOne;
    } else {
      secondNum = numOne;
      thirdNum = numTwo;
    }
  }
  console.log(maxNum);
  console.log(secondNum);
  console.log(thirdNum);
}

sortNumbers(-2, 7, 1)
console.log("---------------------");
sortNumbers(2, 1, 3)