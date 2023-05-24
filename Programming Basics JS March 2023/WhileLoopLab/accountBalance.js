function accountBalance(input){
    let moneyToDeposit = input[0];
    let balance = 0;
    let index = 1;
    while (moneyToDeposit !== "NoMoreMoney") {
        let amount = Number(moneyToDeposit);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        moneyToDeposit = input[index];
        index++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);
