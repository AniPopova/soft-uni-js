function newHouse(input){
    let flowersType = input[0];
    let flowersNumber = Number(input[1]);
    let budget = Number(input[2]);

    let totalPriceFlowers = 0;
    switch(flowersType){
        case "Roses":
            totalPriceFlowers = flowersNumber * 5;
        break;
        case "Dahlias":
            totalPriceFlowers = flowersNumber * 3.80;
        break;
        case "Tulips":
            totalPriceFlowers = flowersNumber * 2.80;
        break;
        case "Narcissus":
            totalPriceFlowers = flowersNumber * 3;
        break;
        case "Gladiolus":
            totalPriceFlowers = flowersNumber * 2.50;
        break;
    }
    
    if(flowersType === "Roses" && flowersNumber > 80){
        totalPriceFlowers *= 0.9;
    }else if(flowersType === "Dahlias" && flowersNumber > 90){
        totalPriceFlowers *= 0.85;
    }else if(flowersType === "Tulips" && flowersNumber > 80){
        totalPriceFlowers *= 0.85;
    }else if(flowersType === "Narcissus" && flowersNumber < 120){
        totalPriceFlowers *= 1.15;
    }else if(flowersType === "Gladiolus" && flowersNumber < 80){
        totalPriceFlowers *= 1.20;
    }
    if(budget >= totalPriceFlowers){
         console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${(budget -totalPriceFlowers).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPriceFlowers-budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses","55","250"]);
newHouse(["Tulips","88","260"]);

