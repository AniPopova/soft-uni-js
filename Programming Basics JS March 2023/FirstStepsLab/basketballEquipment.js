
function basketballEquipment(input){
    let yearlyTax = Number(input[0]);
    let snikers = yearlyTax - (yearlyTax*40/100);
    let clothes = snikers - (snikers*20/100);
    let ball = clothes / 4;
    let accesories = ball /5;

    let totalEquipmentPrice = yearlyTax + snikers + clothes + ball + accesories;

    console.log(totalEquipmentPrice);
}

basketballEquipment(["550"]);