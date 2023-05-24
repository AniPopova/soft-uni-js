function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let bookCounter = 0;

    let command = input[index];
    index++;
    let isBookFound = false;

    while (command !== "No More Books") {
        let currentBook = command;
        
        if (currentBook === favouriteBook) {
            isBookFound = true;
            break;
        }
        bookCounter++;
        command = input[index];
        index++;
    }
    if (!isBookFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    } else {
        console.log(`You checked ${bookCounter} books and found it.`);
    }

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


