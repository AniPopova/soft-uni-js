function amazingNumber(input){

    let inputToString = input.toString();
    let sum = 0;
    for (let i = 0; i < inputToString.length; i++) {
        sum += Number(inputToString[i]);
    }

    let result = sum.toString().includes(9);
    console.log(result ? `${input} Amazing? true` : `${input} Amazing? false`);
}

amazingNumber(999);
