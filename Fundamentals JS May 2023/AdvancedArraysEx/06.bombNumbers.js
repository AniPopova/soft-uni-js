function bombNumbers(arrayOfBombs, bombPower) {
    let [bombNumber, power] = bombPower;
  
    while (arrayOfBombs.includes(bombNumber)) {
      let bombIndex = arrayOfBombs.indexOf(bombNumber);
      let startIndex = Math.max(0, bombIndex - power);
      let endIndex = Math.min(arrayOfBombs.length - 1, bombIndex + power);
  
      arrayOfBombs.splice(startIndex, endIndex - startIndex + 1 + power);
    }
  
    let sum = arrayOfBombs.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  

  console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])); 

