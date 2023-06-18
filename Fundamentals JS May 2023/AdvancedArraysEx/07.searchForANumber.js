function searchForANumber(numbers, manipulations){
    let numbersToTake = manipulations[0];
    let numbersToDelete = manipulations[1];
    let numberWesearch = manipulations[2];

    let newArr = numbers.slice(0, numbersToTake);//this makes an absolute copy of the array because we put 0 in slice()
    newArr.splice(0, numbersToDelete);

    let numberCounter = newArr.filter(e => e === numberWesearch).length;

    console.log(`Number ${numberWesearch} occurs ${numberCounter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('------------------------------');
searchForANumber([7, 1, 7, 7, 8, 2, 7], [5, 1, 7]);