function videoGame(input) {
    let neededPointToUnlock = Number(input[0]);
    let numberOfBattles = Number(input[1]);
    let currentBattle = 0;
    let totalPoints = 0;

    for (let i = 0; i < numberOfBattles; i++) {
        let currentPoints = Number(input[i + 2]);

        if (i === 2) {
            currentPoints = currentPoints + (currentPoints * 15 / 100);
        } else if (i === 4) {
            currentPoints = currentPoints - (currentPoints * 10 / 100);
        } else if (i === 14) {
            currentPoints = currentPoints + (currentPoints * 5 / 100);
        }

        totalPoints += Number(currentPoints);

        if (totalPoints >= neededPointToUnlock) {
            currentBattle = i + 1;
            break;
        }
    }

   let difference = (neededPointToUnlock - totalPoints).toFixed(2);

    if (totalPoints >= neededPointToUnlock) {
        console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);
    } else { 
        console.log(`Player was not able to collect the needed experience, ${difference} more needed.`);
    }
}

videoGame([500, 5, 50, 100, 200, 100, 30]);
console.log('-------------------------------');
videoGame([500, 5, 50, 100, 200, 100, 20]);
console.log('-------------------------------');
videoGame([400, 5, 50, 100, 200, 100, 20]);