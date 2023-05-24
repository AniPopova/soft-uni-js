function divisibleByNine(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let numsToPrint = "";

    for(let i = startNum; i <= endNum; i++){
        if(i % 9 === 0){
        sum += i;
        numsToPrint += i +"\n";
        }
    }
console.log(`The sum: ${sum}`);
console.log(numsToPrint);
}

divisibleByNine(["100", "200"]);