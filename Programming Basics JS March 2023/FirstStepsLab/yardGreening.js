function greeningPrice(input){
let regPrice = Number("7.61");
let discount = Number("0.18");
let squareMeters = Number(input[0]);
let servicePrice = Number(squareMeters*regPrice);
let realDiscount = Number(servicePrice*discount);

console.log(`The final price is: ${servicePrice-realDiscount} lv.`);
console.log(`The discount is: ${realDiscount} lv.`);

}

greeningPrice(["150"]);