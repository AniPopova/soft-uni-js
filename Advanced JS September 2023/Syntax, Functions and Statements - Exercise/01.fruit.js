function fruit(fruitType, grams, price){
   // let fruitType = fruitType;
    let weight = grams / 1000;
    let sum = weight * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruitType}.`);
}

fruit("orange", 2500, 1.80);