function operationsBetweenNumbers(input) {
    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let operation = input[2];
    let result = 0;
    let evenOrOdd = "";

    switch (operation) {
        case "+":
            result = numA + numB;
            // if (result % 2 === 0) {
            //     evenOrOdd = "even";
            // } else {
            //     evenOrOdd = "odd";
            // }
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            console.log(`${numA} ${operation} ${numB} = ${result} - ${evenOrOdd}`);
            break;
        case "-":
            result = numA - numB;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";

            // if (result % 2 === 0) {
            //     evenOrOdd = "even";
            // } else {
            //     evenOrOdd = "odd";
            // }
            console.log(`${numA} ${operation} ${numB} = ${result} - ${evenOrOdd}`);
            break;
        case "*":
            result = numA * numB;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            // if (result % 2 === 0) {
            //     evenOrOdd = "even";
            // } else {
            //     evenOrOdd = "odd";
            // }
            console.log(`${numA} ${operation} ${numB} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
            result = numA / numB;
            if (numB === 0) {
            console.log(`Cannot divide ${numA} by zero`);
            } else{
                console.log(`${numA} / ${numB} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = numA % numB;
            if (numB === 0) {
                console.log(`Cannot divide ${numA} by zero`);
                } else{
                    console.log(`${numA} % ${numB} = ${result}`);
                }
            break;
    }
}
operationsBetweenNumbers(["10","12","+"]);