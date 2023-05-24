function deerOfSanta(input){
    let missingDays = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    let dailyFoodForDeerOne = Number(input[2]);
    let dailyFoodForDeerTwo = Number(input[3]);
    let dailyFoodForDeerThree = Number(input[4]);

    let totalNeededFood = dailyFoodForDeerOne * missingDays + dailyFoodForDeerTwo * missingDays + dailyFoodForDeerThree * missingDays;

    if(foodLeftInKg > totalNeededFood){
        let extraFood = foodLeftInKg - totalNeededFood;
        console.log(`${Math.floor(extraFood)} kilos of food left.`);

    } else {
        let sufficientFood = totalNeededFood - foodLeftInKg;
        console.log(`${Math.ceil(sufficientFood)} more kilos of food are needed.`);
    }

}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
;
