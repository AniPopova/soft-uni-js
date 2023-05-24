function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let result = "";

    for (let curNum = start; curNum <= end; curNum++) {
        let evenIndexSum = 0;
        let oddIndexSum = 0;

        let curNumToStr = String(curNum);
        for (let i = 0; i < curNumToStr.length; i++) {
            let curDigit = Number(curNumToStr[i]);
            let position = i +1;
            if (position % 2 === 0) {
                evenIndexSum += curDigit;
            } else {
                oddIndexSum += curDigit;
            }
        }
        if (evenIndexSum === oddIndexSum) {
            result += curNumToStr + " ";
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(["100000",
"100050"]);
