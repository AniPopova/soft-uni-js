function examPreparation(input) {
    let index = 0;
    let negativeGradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeCounter = 0;
    let gradeCounter = 0;
    let sumOfGrades = 0;
    let isBreakNeeded = false;
    let taskName = "";

    while (command !== "Enough") {
        taskName = command;
        let mark = Number(input[index]);
        index++;

        if (mark <= 4) {
            negativeCounter++;
            if (negativeCounter >= negativeGradesCount) {
                isBreakNeeded = true;
                break;
            }
        }
        gradeCounter++;
        sumOfGrades += mark;
        command = input[index];
        index++;
    }
    if (!isBreakNeeded) {
        console.log(`Average score: ${(sumOfGrades / gradeCounter).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${taskName}`);
    } else {
        console.log(`You need a break, ${negativeCounter} poor grades.`);
    }

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

