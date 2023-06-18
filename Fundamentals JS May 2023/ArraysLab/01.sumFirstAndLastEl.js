function sumFirstAndLastEl(data){
    let beginning = Number(data[0]);
    let end = Number(data[data.length -1]);
    let result = beginning + end;
    console.log(result);
}

sumFirstAndLastEl([20, 30, 40]);
console.log('-----------');
sumFirstAndLastEl([10, 17, 22, 33]);
console.log('-----------');
sumFirstAndLastEl([11, 58, 69]);
