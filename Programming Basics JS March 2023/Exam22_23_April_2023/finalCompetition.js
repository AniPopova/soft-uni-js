function finalCompetition(input) {
    let dancersCount = Number(input[0]);
    let pointCount = Number(input[1]);
    let season = input[2] + "";
    let place = input[3] + "";
    let totalPrice = 0;
    let totalCost = 0;
    let moneyPerDancer = 0;
    let moneyPerCharity = 0;

    switch (season) {
        case "summer":
            if (place === "Bulgaria") {
                totalPrice = dancersCount * pointCount;
                totalCost = totalPrice * 95 / 100; 
            } else {
                totalPrice = dancersCount * pointCount + (dancersCount * pointCount) / 2;
                totalCost = totalPrice * 90 / 100;
            }
            break;
        case "winter":
            if (place === "Bulgaria") {
                totalPrice = dancersCount * pointCount;
                totalCost = totalPrice * 92 / 100;
            } else {
                totalPrice = dancersCount * pointCount + (dancersCount * pointCount) / 2;
                totalCost = totalPrice * 85 / 100;
            }
            break;
    }

    moneyPerCharity = totalCost * 75 / 100;
    moneyPerDancer = (totalCost - moneyPerCharity) / dancersCount;

    console.log(`Charity - ${moneyPerCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}


finalCompetition(["1",
"89.5",
"summer",
"Abroad"])


