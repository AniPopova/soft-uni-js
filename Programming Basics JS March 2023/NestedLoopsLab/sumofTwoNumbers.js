function sumOfTwoNums(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let first = 0;
    let second = 0;
    let counter = 0;

    for (let i = start; i <= end; i++) {
        let isMagic = false;
        for (let j = start; j <= end; j++) {
            let sum = j + i;
            first = i;
            second = j;
            counter++;
            if (sum === magicNum) {
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${first} + ${second} = ${magicNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNums(["88", 
"888", 
"2000"])




