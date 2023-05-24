function convertToInches(input){
    let cm = Number(input[0]);
    let inch = Number("2.54");
    let result = Number(cm * inch);

    console.log(result);
}

convertToInches(["5"]);