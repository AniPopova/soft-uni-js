function addAndSubtract(input) {
    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrLength = input.length;
    for (let index = 0; index < arrLength; index++) {
        let curNum = Number(input[index]);
        sumOldArray += curNum;
        if (curNum % 2 === 0) {
            curNum += index;
        } else {
            curNum -= index;
        }
        input[index] = curNum;
        sumNewArray += curNum;
    }
    console.log(input);
    console.log(sumOldArray);
    console.log(sumNewArray);

}

addAndSubtract([5, 15, 23, 56, 35]);