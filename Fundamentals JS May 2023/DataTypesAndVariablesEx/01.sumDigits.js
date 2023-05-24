function sumDigits(input) {
    let inputAsString = input.toString();
    let sum = 0;
    for (let i = 0; i < inputAsString.length; i++) {
        let element = Number(inputAsString[i]);
        sum += element;
    }
    console.log(sum);
}

sumDigits(245678);