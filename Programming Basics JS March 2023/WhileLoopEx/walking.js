function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;
    while (command !== 'Going home') {
        let steps = Number(command);
        totalSteps += steps;
        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!\n${Math.abs(10000 - totalSteps)} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Going home') {

        let steps = Number(input[index]);
        totalSteps += steps;
        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!\n${Math.abs(10000 - totalSteps)} steps over the goal!`);
        } else {
            console.log(`${Math.abs(10000 - totalSteps)} more steps to reach goal.`);
        }
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



