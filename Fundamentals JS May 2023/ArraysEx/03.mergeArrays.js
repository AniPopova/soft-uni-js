function mergeArrays(firstArr, secondArr) {
    let resultArr = [];
    let lenghtOfArrs = firstArr.length;
    for (let index = 0; index < lenghtOfArrs; index++) {

        if (index % 2 === 0) {
            resultArr[index] = Number(firstArr[index]) + Number(secondArr[index]);
        } else {
            resultArr[index] = firstArr[index] + secondArr[index];
        }
    }
    console.log(resultArr.join(' - '));

}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);