function specialNumbers(input) {
    let n = Number(input[0]);
    let storage = "";
  
    for (let curNum = 1111; curNum <= 9999; curNum++) {
      let curNumStr = curNum.toString();
      let isSpecial = true;
      for (let j = 0; j < curNumStr.length; j++) {
        let digit = Number(curNumStr[j]);

        if (n % digit !== 0) {
          isSpecial = false;
          break;
        }
      }
  
      if (isSpecial === true) {
        storage += `${curNumStr} `;
      }
    }
  
    console.log(storage);
  }

specialNumbers(["3"]);