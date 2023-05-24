function travel(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'End') {
        let country = command;
        let budget = Number(input[index]);
        index++;
        let totalSavings = 0;
        while (totalSavings < budget) {
            let moneyToSave = Number(input[index]);
            index++;
            totalSavings += moneyToSave;
        }
        console.log(`Going to ${country}!`);
        command = input[index];
        index++;
    }
}

travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


