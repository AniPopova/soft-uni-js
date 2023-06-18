function loadingBar(number) {
    let percentCounter = number / 10;
    let pointCounter = 10 - percentCounter;

    if (percentCounter === 10) {
        console.log('100% Complete!');
    } else {
        console.log(`${number}% [${'%'.repeat(percentCounter)}${'.'.repeat(pointCounter)}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
console.log('-----------------');
loadingBar(100);
console.log('-----------------');
loadingBar(40);