function cinemaTickets(input) {
    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let movie = command;
        let placesAvailable = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;

        let placesTaken = 0;

        while (command1 !== 'End') {
            let ticketType = command1;
            placesTaken++;
            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standartTickets++;
            } else {
                kidTickets++;
            }
            if (placesTaken === placesAvailable) {
                break;
            }
            command1 = input[index];
            index++;
        }

        let percentsTaken = (placesTaken / placesAvailable) * 100;
        console.log(`${movie} - ${percentsTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = studentTickets + standartTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

