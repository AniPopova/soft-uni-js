function substitution(input) {
  let k = Number(input[0]);
  let l = Number(input[1]);
  let m = Number(input[2]);
  let n = Number(input[3]);

  let count = 0;
  let output = "";

  for (let i = k; i <= 8; i++) {
    for (let j = 9; j >= l; j--) {
      for (let p = m; p <= 8; p++) {
        for (let q = 9; q >= n; q--) {
          if (i % 2 == 0 && j % 2 != 0 && p % 2 == 0 && q % 2 != 0) {
            if (i === p && j === q) {
              output += "Cannot change the same player.\n";
            } else {
              output += `${i}${j} - ${p}${q}\n`;
              count++;
            }
          }
          if (count === 6) {
            console.log(output);
            return;
          }
        }
      }
    }
  }
  console.log(output);
}

substitution(["6", "7", "5", "6"]);
  

