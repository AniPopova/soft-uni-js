function sumOfNumbers(input){
   let index = 0; 
   let arrayNum = Number(input[0]);
   index++;
    
    let sum = 0;

    while (arrayNum > sum) {
        let num = Number(input[index]);
        sum += num;
        index++;
    }
 console.log(sum);
}

sumOfNumbers(["100",
"10",
"20",
"30",
"40"])
