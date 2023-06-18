function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].toString();
        let reversed = current.split('').reverse().join('');

        if (current === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
