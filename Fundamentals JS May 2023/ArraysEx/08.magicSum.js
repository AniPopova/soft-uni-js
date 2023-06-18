function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        
        if (i !== 0) {
            let previous = Number(arr[i - 1]);

            for (let j = i; j < arr.length; j++) {
                let current = Number(arr[j]);
                let sum = current + previous;

                if (sum === num) {
                    console.log(`${previous} ${current}`);
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("------------------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);