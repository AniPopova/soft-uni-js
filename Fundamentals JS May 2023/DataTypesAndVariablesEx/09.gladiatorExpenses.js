function gladiatorExpenses(fight, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let expenses = 0;
    for (let i = 1; i <= fight; i++) {

        if (i % 2 === 0) {
            expenses += Number(helmetPrice);
        }
        if (i % 3 === 0) {
            expenses += Number(swordPrice);
        }
        if (i % 6 === 0) {
            expenses += Number(shieldPrice);
        }
        if (i % 12 === 0) {
            expenses += Number(armourPrice);
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);