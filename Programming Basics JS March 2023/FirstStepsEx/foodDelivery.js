function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenues = Number(input[1]);
    let vegeterianMenues = Number(input[2]);

    let sumChicken = chickenMenus * 10.35;
    let sumFish = fishMenues * 12.40;
    let sumVegi = vegeterianMenues * 8.15;
    let totalSum = sumChicken + sumFish + sumVegi;
    let delivery = 2.50;
    let desert = totalSum *20/100;

    
    let sum = totalSum + desert  + delivery;
    console.log(sum);

}
foodDelivery(["2 ",
"4 ",
"3 "]

);