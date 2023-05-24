function toyShop(input){
    let excursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let moneyEarned = puzzles * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks *2;
    let totalToys = puzzles + dolls + teddyBears + minions + trucks;
    let moneyLeft = 0;
    if(totalToys >= 50){
        moneyEarned = 0.75 * moneyEarned;
    }
    moneyEarned = 0.9 * moneyEarned;
    if(moneyEarned >= excursion){
        moneyLeft = moneyEarned - excursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        moneyLeft = excursion - moneyEarned;
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    } 
    
}
toyShop(["40.8","20","25","30","50","10"]);
toyShop(["320","8","2","5","5","1"]);
