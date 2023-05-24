function fintnessCard(input) {


    let availableMoney = Number(input[0]);
    let sex = input[1] + "";
    let age = Number(input[2]);
    let sport = input[3] + "";
    let sportCard = 0;

    switch (sport) {
        case "Gym":
            if (sex === 'f') {
                sportCard = 35;
            } else {
                sportCard = 42;
            }
            break;
        case "Boxing":
            if (sex === 'f') {
                sportCard = 37;
            } else {
                sportCard = 41;
            }
            break;
        case "Yoga":
            if (sex === 'f') {
                sportCard = 42;
            } else {
                sportCard = 45;
            }
            break;
        case "Zumba":
            if (sex === 'f') {
                sportCard = 31;
            } else {
                sportCard = 34;
            }
            break;
        case "Dances":
            if (sex === 'f') {
                sportCard = 53;
            } else {
                sportCard = 51;
            }
            break;
        case "Pilates":
            if (sex === 'f') {
                sportCard = 37;
            } else {
                sportCard = 39;
            }
            break;
    }

    if (age <= 19) {
        sportCard = sportCard - (sportCard * 0.2);
    }

    if (sportCard <= availableMoney) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let neededMoney = (sportCard - availableMoney).toFixed(2);
        console.log(`You don't have enough money! You need $${neededMoney} more.`);
    }
}
fintnessCard(["10",
"m",
"50",
"Pilates"])


