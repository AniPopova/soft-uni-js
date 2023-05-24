function change(input){
    let bitcoins = Number(input[0]);
    let chineeseUans = Number(input[1]);
    let comission = Number([input[2]]);

    let bitcoinValueInBGN = bitcoins * 1168;
    let uanValueInUSD = chineeseUans * 0.15;
    let dolarToBGN = 1.76;
    let euroValue = 1.95;

    let totalAmountInEuro = (bitcoinValueInBGN + uanValueInUSD*dolarToBGN)/euroValue;
    let totalAmountWithoutComission = totalAmountInEuro - (totalAmountInEuro*(comission/100));
    console.log(totalAmountWithoutComission.toFixed(2));

}

change(["7",
"50200.12",
"3"])


