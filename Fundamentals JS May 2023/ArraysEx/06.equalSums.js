function equalSums(input) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let max = input.length;
    for (let currentI = 0; currentI < max; currentI++) {

        for (let i = 0; i < max; i++) {
            if (i !== currentI) {
                let num = Number(input[i]);
                if (i < currentI) {
                    leftSum += num;
                } else if (i > currentI) {
                    rightSum += num;
                }
            }
            if (currentI === 0) {
                leftSum = 0;
            } else if (currentI === max - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(currentI);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
console.log("-----------------");
equalSums([1, 2]);