function grandpaStavri(input){
    let index = 0;
    let daysCount = Number(input[index]);
    index++;
    let totalLiters = 0;
    let totalDegrees = 0;

    for (let i = 1; i <= daysCount; i++) {
        let dailyLiters = Number(input[index]);
        index++;
        totalLiters +=dailyLiters;
        let dailyDegrees = Number(input[index]);
        index++;
        totalDegrees +=(dailyDegrees*dailyLiters); 
    }

    totalLiters = Number(totalLiters);
    totalDegrees = totalDegrees/totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${totalDegrees.toFixed(2)}`);

    if(totalDegrees < 38){
        console.log('Not good, you should baking!');
    } else if(totalDegrees > 38 && totalDegrees < 42){
        console.log('Super!');
    }else{
        console.log('Dilution with distilled water!');
    }
}

grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"])


