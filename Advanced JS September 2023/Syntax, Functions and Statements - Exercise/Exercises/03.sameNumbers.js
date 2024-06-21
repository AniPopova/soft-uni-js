function sameNumbers(number) {
  let isEqual = true;
  let sum = 0;
  const digits = number.toString().split("");

  digits.forEach((digit, index) => {
    if (digit !== digits[0]) {
      isEqual = false;
    }
    sum += Number(digit);
  });

  console.log(isEqual);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
