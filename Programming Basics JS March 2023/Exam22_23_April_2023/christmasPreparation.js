function christmasPreparation(input) {
    let paperRolls = Number(input[0]);
    let fabricRollw = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let paperPrice = paperRolls * 5.80;
    let fabricPrice = fabricRollw * 7.20;
    let gluePrice = glueLiters * 1.20;
    let totalPrice = paperPrice + fabricPrice + gluePrice;
    let finalPrice = totalPrice - (totalPrice*discountPercentage/100);

    console.log(finalPrice.toFixed(3));

}

christmasPreparation(["4",
"2",
"5",
"13"])
;
