function sumOfNumbers(input){
    let number = input[0].toString();
    let sum = 0;

    for(let i = 0; i < number.length; i++){
        let singleNum = Number(number.charAt(i));
        sum +=singleNum;
    }
console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"]);