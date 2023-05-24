function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let total = 0;

    if(type === "Premiere"){
        total = rows * columns *12;
    } else if(type === "Normal"){
        total = rows * columns *7.50;
    } else {
        total = rows * columns *5;
    }
    console.log(`${total.toFixed(2)} leva`)
}

cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);