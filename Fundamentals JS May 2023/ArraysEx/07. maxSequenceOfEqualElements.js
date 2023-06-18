function maxSequenceOfEqualElements(input) {

    let sequence = 1;
    let maxSequence = 0;
    let sequenceCounter = 0;
    for (let i = 0; i < input.length; i++) {

        if (i !== 0) {
            let current = Number(input[i]);
            let previous = Number(input[i - 1]);
            if (current === previous) {
                sequence++;
                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    sequenceCounter = current;
                }
            } else {
                sequence = 1;
            }
        }
    }
    console.log(`${(sequenceCounter + ' ').repeat(maxSequence)}`);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("-----------------");
maxSequenceOfEqualElements([4, 4, 4, 4]);