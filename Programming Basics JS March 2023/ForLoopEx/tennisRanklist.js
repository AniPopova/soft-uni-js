function tennisRanklist(input){
    let tournamentsCount = Number(input[0]);
    let innitialPoints = Number(input[1]);
    let tournamentsWon = 0;

    let sumPoints = 0;

    for(let i = 2; i < tournamentsCount + 2; i++){
        let result = input[i];
        if(result === "F"){
            sumPoints+=1200;
        } else if(result === "SF"){
            sumPoints+=720;
        } else if(result === "W"){
            sumPoints+=2000;
            tournamentsWon++;
        }
    }
    console.log(`Final points: ${sumPoints+innitialPoints}`);
    console.log(`Average points: ${Math.floor(sumPoints/tournamentsCount)}`);
    console.log(`${((tournamentsWon / tournamentsCount) * 100).toFixed(2)}%`);
}

tennisRanklist
    (["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
