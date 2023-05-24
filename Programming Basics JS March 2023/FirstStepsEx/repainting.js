function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let diluent = Number(input[2]);
    let hours = Number(input[3]);
    //console.log(nylon);
    let materialPrice =  (nylon + 2)*1.5 +(paint + (paint*10/100))*14.5 + (diluent *5.00) + 0.40;
    let hoursPrice = materialPrice * 0.3;
    let totalSum = materialPrice + (hours*hoursPrice);

    console.log(totalSum);
    
}

repainting["10","11","4","8"];
