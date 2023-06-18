function reverseAnArrayOfNumbers(n, arr){
    let reversedArr = [];
    for (let j = n - 1; j >= 0; j--) {
       reversedArr.push(arr[j]);
    }

    console.log(reversedArr.join(' '));

}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);