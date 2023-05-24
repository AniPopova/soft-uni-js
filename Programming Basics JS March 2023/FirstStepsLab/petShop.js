function calculateFood(input){
    let dogFood = Number("2.50");
    let catFood = Number("4");
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);
    let result = Number(dogFood*dogFoodPacks + catFood*catFoodPacks);

    console.log(result+" lv.");
}

calculateFood(["5", "4"]);