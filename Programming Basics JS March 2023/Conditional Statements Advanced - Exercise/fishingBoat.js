
function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1].toString();
    let fishers = Number(input[2]);
    let regularPrice = 0;
    
    switch (season) {
        case "Spring":
            regularPrice = 3000;
            break;
        case "Summer":
            regularPrice = 4200;
            break;
        case "Autumn":
            regularPrice = 4200;
            break;
        case "Winter":
            regularPrice = 2600;
            break;
    }

    if(fishers <= 6){
        regularPrice = regularPrice - (regularPrice*10/100);
    }else if(fishers <=11){
        regularPrice = regularPrice - (regularPrice*15/100);
    }else{
        regularPrice = regularPrice - (regularPrice*25/100);
    }

    if(fishers % 2 == 0 && season !== "Autumn"){
        regularPrice = regularPrice - (regularPrice * 5/100);
    }

    if(budget >= regularPrice){
        console.log(`Yes! You have ${(budget - regularPrice).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${(regularPrice - budget).toFixed(2)} leva.`);
    }
}

fishingBoat	(["2000",
"Winter",
"13"]);
	
