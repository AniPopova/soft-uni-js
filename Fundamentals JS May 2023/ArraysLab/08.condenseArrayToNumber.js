function condenseArrayToNumber(arr) {
    let result = [];
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            result[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = result;
        result = [];
    }
    console.log(arr.join(' '));

}

condenseArrayToNumber([5]);