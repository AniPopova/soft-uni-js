function numberPyramid(input) {
    let n = Number(input[0]);
    let currentNum = 1;
  
    for (let row = 1; row <= n; row++) {
      let rowNumbers = '';
  
      for (let col = 1; col <= row; col++) {
        if (currentNum > n) {
          break;
        }
  
        rowNumbers += `${currentNum} `;
        currentNum++;
      }
  
      console.log(rowNumbers);
    }
  }
  

  numberPyramid(["7"]);