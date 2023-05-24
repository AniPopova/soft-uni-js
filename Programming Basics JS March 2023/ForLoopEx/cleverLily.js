function smartLily(input){
    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let birthDayMoney = 10;
    let totalSum = 0;

    for(let currBd = 1; currBd <= age; currBd++){
        if(currBd % 2 === 0){
            totalSum += (birthDayMoney -1);
            birthDayMoney +=10;
        } else{
            totalSum +=toyPrice;
        }
    }

    if(totalSum >= machinePrice){
        console.log(`Yes! ${(totalSum - machinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(machinePrice - totalSum).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"]);

