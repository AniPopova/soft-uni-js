function journey(input) {
    let budget = Number(input[0]);
    let season = input[1].toString();
    let residence = "";
    let area = "";
    let spentMoney = 0;

    if (budget <= 100) {
        area = "Bulgaria";
        if (season === "summer") {
            spentMoney = budget * 30 / 100;
            residence = "Camp";
        } else {
            spentMoney = budget * 70 / 100;
            residence = "Hotel";
        }
    } else if (budget <= 1000) {
        area = "Balkans";
        if (season === "summer") {
            spentMoney = budget * 40 / 100;
            residence = "Camp";
        } else {
            spentMoney = budget * 80 / 100;
            residence = "Hotel";

        }

    } else if (budget > 1000) {
        area = "Europe";
        spentMoney =budget * 90 / 100;
        residence = "Hotel";
        area = "Europe";
    }

    console.log(`Somewhere in ${area}`);
    console.log(`${residence} - ${spentMoney.toFixed(2)}`)
}


journey(["1500", "summer"])