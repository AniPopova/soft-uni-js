function birthDay(input){
    let rent = Number(input);
    let cake = rent * 0.2;
    let drinks = cake - (cake * 0.45);
    let animator = rent/3;

    let totalCost = rent + cake + drinks + animator;
    console.log(totalCost.toFixed(2));
}

birthDay(["2250"]);