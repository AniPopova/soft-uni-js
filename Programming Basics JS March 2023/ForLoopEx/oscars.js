function oscars(input) {
    let actorName = input[0].toString();
    let academyScore = Number(input[1]);
    let joury = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let nameOfTheJouryMember = input[i];
        let givenPoints = Number(input[i + 1]);

        let pointsWon = nameOfTheJouryMember.length * givenPoints / 2;
        academyScore += pointsWon;

        if (academyScore > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyScore.toFixed(1)}!`);
            break;
        }
    }
    if (academyScore <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyScore).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
