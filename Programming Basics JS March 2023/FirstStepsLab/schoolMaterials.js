// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]


function schoolMaterials(input){
let pencilPack = Number(input[0]);
let markersPack = Number(input[1]);
let material = Number(input[2]);
let discount =Number(input[3]);
let totalSum = (pencilPack*5.8 + markersPack*7.2 + material*1.2);
let discountInMoney = (pencilPack*5.8 + markersPack*7.2 + material*1.2)*(discount/100);

console.log(totalSum-discountInMoney);
}
schoolMaterials(["2 ","3 ","4 ","25 "]);
schoolMaterials(["4 ","2 ","5 ","13 "]);