function sumOfNumbers(numN, numM) {
  let first = Number(numN);
  let second = Number(numM);
  let result = 0;

  for (let i = first; i <= second; i++) {
    result += i;
  }
  console.log(result);
}

sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");
