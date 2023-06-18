function factorialDivision(numOne, numTwo) {

    function factorial(num) {
      if (num === 0) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
  
    let factorial1 = factorial(numOne);
    let factorial2 = factorial(numTwo);

    let division = (factorial1 / factorial2).toFixed(2);
  
    console.log(division);
  }

  factorialDivision(5, 2);