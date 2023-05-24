function cake(input) {
    let index = 0;
    let cakeLength = Number(input[index]);
    index++;
    let cakeWidth = Number(input[index]);
    index++;
    let cakePieces = cakeLength * cakeWidth;
    let command = input[index];
    index++;

    while (command !== 'STOP') {
        let piecesToTake = Number(command);
        cakePieces -= piecesToTake;
        if (cakePieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === 'STOP') {
        console.log(`${cakePieces} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

