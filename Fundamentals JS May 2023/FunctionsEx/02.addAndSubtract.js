function addAndSubstract(first, second, c) {

    function sum(first , second) {
        return Number(first + second);
    }

    let sumResult = sum(first, second);

    function substract(sum, c) {
        return Number(sum - c);
    }

    return substract(sumResult, c);
}

console.log(addAndSubstract(1,
17,
30));
