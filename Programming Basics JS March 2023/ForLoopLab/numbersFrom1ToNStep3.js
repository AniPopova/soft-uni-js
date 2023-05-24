function numbersFrom1ToNStep3(input){
    let number = Number(input[0]);
    for(let i = 1; i <= number; i+=3){
        console.log(i);
    }
}

numbersFrom1ToNStep3(["7"]);