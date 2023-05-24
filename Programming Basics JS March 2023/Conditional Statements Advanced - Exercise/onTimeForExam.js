function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let totalExamTime = examHour * 60 + examMinute;
    let totalArriveTime = arriveHour * 60 + arriveMinute;
    let difference = Math.abs(totalExamTime - totalArriveTime);
    let diffHours = Math.floor(difference / 60);
    let diffMin = difference % 60;

    if (diffHours > 0 && diffMin < 10) {
        diffMin = `0${diffMin}`;
    }

    if (totalExamTime === totalArriveTime) {
        console.log("On time");
    } else if (totalExamTime < totalArriveTime) {
        console.log("Late");
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            console.log(`${diffHours}:${diffMin} hours after the start`);
        }
    } else {
        if (difference <= 30) {
            console.log("On time");
            console.log(`${difference} minutes before the start`);
        } else {
            console.log("Early");
            if (difference < 60) {
                console.log(`${difference} minutes before the start`);
            } else {
                console.log(`${diffHours}:${diffMin} hours before the start`);
            }
        }
    }
}

onTimeForExam(["14",
"00",
"13",
"55"])


