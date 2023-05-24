function godzilaVsKong(input){
    let budget = Number(input[0]);
    let numberOfActors = Number(input[1]);
    let suitPrice = Number(input[2]);
    let totalSuitPrice = numberOfActors*suitPrice;
    let decorPrice = 0.1 * budget;

    if(numberOfActors > 150){
        totalSuitPrice = totalSuitPrice *0.9;
    }

    let neededBudget = totalSuitPrice + decorPrice;
    let moneyLeft = 0;
    if(budget >= neededBudget){
        moneyLeft = budget - neededBudget;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyLeft = neededBudget - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    }
    

}
godzilaVsKong(["20000","120","55.5"]);
godzilaVsKong(["15437.62","186","57.99"]);
godzilaVsKong(["9587.88","222","55.68"]);


