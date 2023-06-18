function dayOfWeek(day) {
    let daysOfWeek = [
        undefined,
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"];
    let result = daysOfWeek[day];
    if (result) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }
}


dayOfWeek(0);