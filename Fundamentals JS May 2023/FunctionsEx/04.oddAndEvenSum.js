function oddAndEvenSum(number) {

    let numberAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    let numAsStrLength = numberAsString.length;

    for (let index = 0; index < numAsStrLength; index++) {
        let current = Number(numberAsString[index]);

        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
 return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
