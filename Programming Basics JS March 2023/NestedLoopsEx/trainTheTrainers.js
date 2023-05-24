function trainTheTrainers(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let totalScore = 0;
    let count = 0;
    let presentationName = '';

    while (index < input.length && input[index] !== 'Finish') {
        presentationName = input[index];
        index++;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            let score = Number(input[index]);
            index++;
            sum += score;
        }

        let averageScore = sum / n;
        totalScore += averageScore;
        count++;

        console.log(`${presentationName} - ${averageScore.toFixed(2)}.`);
    }

    let averageTotalScore = totalScore / count;
    console.log(`Student's final assessment is ${averageTotalScore.toFixed(2)}.`);
}
  


trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);



