function largestNumber(num1, num2, num3) {
  let maxNum = 0;
  if (num1 > num2 && num2 > num3) {
    maxNum = num1;
  } else if (num1 < num2 && num3 < num2) {
    maxNum = num2;
  } else {
    maxNum = num3;
  }

  console.log(`The largest number is ${maxNum}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
