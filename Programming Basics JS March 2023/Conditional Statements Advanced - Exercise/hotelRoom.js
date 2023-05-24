function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let totalPriceStudio = 0;
    let totalPriceApartament = 0;

    if (month == "May" || month == "October") {
        totalPriceApartament = nights * 65;
        totalPriceStudio = nights * 50;
        if (nights > 7 && nights <= 14) {
            totalPriceStudio *= 0.95;
        } else if (nights > 14) {
            totalPriceApartament *= 0.9;
            totalPriceStudio *= 0.7;
        }
    } else if (month == "June" || month == "September") {
        totalPriceApartament = nights * 68.7;
        totalPriceStudio = nights * 75.2;
        if (nights > 14) {
            totalPriceApartament *= 0.9;
            totalPriceStudio *= 0.8;
        }
    }
    else if (month == "July" || month == "August") {
        totalPriceApartament = nights * 77;
        totalPriceStudio = nights * 76;
        if (nights > 14) {
            totalPriceApartament *= 0.9;
        }
    }
    console.log(`Apartment: ${totalPriceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
hotelRoom(["June","14"]);