function reverseInPlace(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let currEl = input[i];
        let alternative = input[input.length - 1 - i];
        input[i] = alternative;
        input[input.length - 1 - i] = currEl;

    }
    console.log(input.join(' '));
}

reverseInPlace(['abc', 'def', 'hig',
    'klm', 'nop']);