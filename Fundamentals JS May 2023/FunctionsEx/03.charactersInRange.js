function charactersInRange(firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArr = [];

    for (let currentChar = start + 1; currentChar < end; currentChar++) {
        charArr.push(String.fromCharCode(currentChar));

    }
    return charArr.join(' ');
}
console.log(charactersInRange('C','#'));
