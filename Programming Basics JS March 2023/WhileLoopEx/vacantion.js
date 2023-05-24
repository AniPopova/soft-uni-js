function vacantion(input) {
    let index = 0;

    let neededMoney = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let isPossibleToSaveMoney = true;
    let totalDays = 0;

    while (neededMoney > currentMoney) {
        let comand = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;

        switch (comand) {
            case 'spend':
                spendCounter++;
                currentMoney -= tempMoney;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendCounter === 5) {
                    isPossibleToSaveMoney = false;
                }
                break;
            case 'save':
                currentMoney += tempMoney;
                spendCounter = 0;
                break;
        }
        totalDays++;
        if (!isPossibleToSaveMoney) {
            break;
        }

    }
    if (isPossibleToSaveMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    } else {
        console.log(`You can't save the money.\n${totalDays}`);
    }
}

vacantion(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

