function depositCalculator(input){
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let interest = Number(input[2]);
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)


    let sum = deposit + period*((deposit*(interest/100))/12);
    console.log(sum);

}

depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350","6 ","7 "]);
