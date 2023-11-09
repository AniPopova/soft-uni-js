function division(num) {
  let result;
  let isDivisible;
  if (num % 10 === 0) {
    result = 10;
    isDivisible = true;
  } else if (num % 7 === 0) {
    result = 7;
    isDivisible = true;
  } else if (num % 6 === 0) {
    result = 6;
    isDivisible = true;
  } else if (num % 3 === 0) {
    result = 3;
    isDivisible = true;
  } else if (num % 2 === 0) {
    result = 2;
    isDivisible = true;
  } else {
    isDivisible = false;
    console.log("Not divisible");
  }
  if (isDivisible) {
    console.log(`The number is divisible by ${result}`);
  }
}

division(11);
