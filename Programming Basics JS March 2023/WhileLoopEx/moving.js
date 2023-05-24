function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let cubicMeters = width * length * height;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        let box = Number(command);
        cubicMeters -= box;
        if (cubicMeters <= 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (cubicMeters >= 0) {
        console.log(`${cubicMeters.toFixed(0)} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs((cubicMeters)).toFixed(0)} Cubic meters more.`);
    }

}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

