function fruitShop(input) {
    let fruit = input[0] + "";
    let weekDay = input[1] + "";
    let quantity = Number(input[2]);
    let fruitprice = 0;
    let totalPrice = 0;

    if (weekDay === "Monday" || weekDay === "Tuesday" || weekDay === "Wednesday" || weekDay === "Thursday" || weekDay === "Friday") {
        switch (fruit) {
            case "banana":
                fruitprice = 2.50;
                totalPrice = quantity * fruitprice;
                break;
            case "apple":
                fruitprice = 1.20;
                totalPrice = quantity * fruitprice;
                break;
            case "orange":
                fruitprice = 0.85;
                totalPrice = quantity * fruitprice;
                break;
            case "grapefruit":
                fruitprice = 1.45;
                totalPrice = quantity * fruitprice;
                break;
            case "kiwi":
                fruitprice = 2.70;
                totalPrice = quantity * fruitprice;
                break;
            case "pineapple":
                fruitprice = 5.50;
                totalPrice = quantity * fruitprice;
                break;
            case "grapes":
                fruitprice = 3.85;
                totalPrice = quantity * fruitprice;
                break;
            default:
                console.log('error');
                break;
        }

    } else if (weekDay === "Saturday" || weekDay === "Sunday") {
        switch (fruit) {
            case "banana":
                fruitprice = 2.70;
                totalPrice = quantity * fruitprice;
                break;
            case "apple":
                fruitprice = 1.25;
                totalPrice = quantity * fruitprice;
                break;
            case "orange":
                fruitprice = 0.90;
                totalPrice = quantity * fruitprice;
                break;
            case "grapefruit":
                fruitprice = 1.60;
                totalPrice = quantity * fruitprice;
                break;
            case "kiwi":
                fruitprice = 3;
                totalPrice = quantity * fruitprice;
                break;
            case "pineapple":
                fruitprice = 5.60;
                totalPrice = quantity * fruitprice;
                break;
            case "grapes":
                fruitprice = 4.20;
                totalPrice = quantity * fruitprice;
                break;
            default:
                console.log('error');
                break;
        }
    } else {
        console.log("error");
    }

    if (totalPrice !== 0) {
        console.log(totalPrice.toFixed(2));
    }
}

fruitShop(["apple",
"Monday",
"0.5"])




