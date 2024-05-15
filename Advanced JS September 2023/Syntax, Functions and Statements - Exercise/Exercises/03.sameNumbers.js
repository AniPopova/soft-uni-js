function sameNumbers(number) {
  let isEqual = true;
  let sum = 0;
  let convertedNum = number
    .toString()
    .split("")
    .forEach((x, self) => { //just iterate through the numbers
      if (x !== self[0]) {
        isEqual = false;
      }
      return (sum += Number(x));
    });
  console.log(isEqual);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
