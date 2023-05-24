function excursionSale(input) {
    let index = 0;
    let seaExcurssionCount = Number(input[index]);
    index++;
    let mountainExcurssionCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalSumSea = 0;
    let totalSumMountain = 0;
    let totalExcursions = seaExcurssionCount + mountainExcurssionCount;
  
    while (command !== 'Stop' && totalExcursions > 0) {
      switch (command) {
        case 'sea':
          if (seaExcurssionCount > 0) {
            totalSumSea += 680;
            seaExcurssionCount -= 1;
            totalExcursions -= 1;
          }
          break;
        case 'mountain':
          if (mountainExcurssionCount > 0) {
            totalSumMountain += 499;
            mountainExcurssionCount -= 1;
            totalExcursions -= 1;
          }
          break;
      }
      if (totalExcursions > 0) {
        command = input[index];
        index++;
      }
    }
  
    if (totalExcursions === 0) {
      console.log(`Good job! Everything is sold.\nProfit: ${totalSumSea + totalSumMountain} leva.`);
    } else {
      console.log(`Profit: ${totalSumSea + totalSumMountain} leva.`);
    }
  }
  

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

