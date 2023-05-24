function tradeCommissions(input) {
    let city = input[0] + "";
    let sales = Number(input[1]);
    let comission = 0;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 5 / 100;
            } else if (sales <= 1000) {
                comission = sales * 7 / 100;
            } else if (sales <= 10000) {
                comission = sales * 8 / 100;
            } else {
                comission = sales * 12 / 100;
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 4.5 / 100;
            } else if (sales <= 1000) {
                comission = sales * 7.5 / 100;
            } else if (sales <= 10000) {
                comission = sales * 10 / 100;
            } else {
                comission = sales * 13 / 100;
            }

            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                comission = sales * 5.5 / 100;
            } else if (sales <= 1000) {
                comission = sales * 8 / 100;
            } else if (sales <= 10000) {
                comission = sales * 12 / 100;
            } else {
                comission = sales * 14.5 / 100;
            }
            break;
    }
    if (city === "Sofia" || city === "Varna" || city === "Plovdiv" && comission > 0) {
        console.log(comission.toFixed(2));
    } else {
        console.log("error");
    }

}

tradeCommissions(["Plovdiv",
"499.99"])



