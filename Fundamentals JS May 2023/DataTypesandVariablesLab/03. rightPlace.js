function rightPlace(stringOne, char, stringTwo) {
    let result = stringOne.replace("_", char);
    // if (result === stringTwo) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }

    let check = result === stringTwo ? 'Matched' : 'Not Matched';
    console.log(check);

}

rightPlace('Str_ng', 'Z', 'Strong');