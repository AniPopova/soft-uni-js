function sumOfOddNumbers(num) {
    let sum = 0;
    let currentNumber = 1;
    
    for (let i = 1; i <= num; i++) {
      console.log(currentNumber);
      sum += currentNumber;
      currentNumber += 2;
    }
    
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);