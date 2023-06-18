function maxNumber(input) {
    let result = '';
    let arrLength = input.length;
    for (let index = 1; index <= arrLength; index++) {
        let isMaax = true;
        let curNum = Number(input[index - 1]);

        for (let j = index; j < input.length; j++) {
            let nextNum = Number(input[j]);
            if (nextNum >= curNum) {
                isMaax = false;
                break;
            }

        }
        if (isMaax) {
            result += `${curNum} `;
        }

    }
    console.log(result);
}

maxNumber([1, 4, 3, 2]);