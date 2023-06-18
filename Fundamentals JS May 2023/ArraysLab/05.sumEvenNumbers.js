function sumEvenNumbers(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        let current = Number(data[i]);
        if (current % 2 === 0) {
            sum += current;
        } else {
            sum += 0;
        }

    }
    console.log(sum);

}

sumEvenNumbers(['2','7','3','8','10']);