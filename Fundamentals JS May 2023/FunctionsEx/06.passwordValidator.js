function passwordValidator(password) {
    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;
    let digitCounter = 0;
    if (isInvalidLength) {
        isValidPass = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    let isOnlyLetterAndDigits = true;
    for (let index = 0; index < password.length; index++) {
        let current = password.charCodeAt(index);
        let isNotNumber = current < 48 || current > 57;
        let isNumber = current >= 48 && current <= 57;
        let isNotSmallLetter = current < 97 || current > 122;
        let isNotCapitalLetter = current < 65 || current > 90;

        if (isNumber) {
            digitCounter++;
        }

        if (isNotNumber && isNotSmallLetter && isNotCapitalLetter) {
            isOnlyLetterAndDigits = false;
            isValidPass = false;
        }

    }
    if (!isOnlyLetterAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if(!(digitCounter >= 2)){
        isValidPass = false;
        console.log('Password must have at least 2 digits');
    }

    if(isValidPass){
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
console.log('-------------------');
passwordValidator('MyPass123');
console.log('-------------------');
passwordValidator('Picture');