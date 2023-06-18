function sorting(input) {

    let sortedArray = input.sort((a, b) => b - a);
    let newArray = [];
    let arrLength = sortedArray.length;

    for (let i = 0; i < arrLength; i++) {
        let currentElement = sortedArray.shift();
        let lastElement = sortedArray.pop();
        newArray.push(currentElement);
        newArray.push(lastElement);
    }
    console.log(newArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('----------------------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);