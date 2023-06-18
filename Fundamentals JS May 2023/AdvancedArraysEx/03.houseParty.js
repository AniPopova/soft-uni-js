function houseParty(guests) {
    let guestList = [];

    for (const person of guests) {
        let confirmation = person.split(' ');
        let guestName = confirmation[0];

        if (confirmation.includes('not')) {
            if (guestList.includes(guestName)) {
                let guestIndex = guestList.indexOf(guestName);

                if (guestIndex !== -1) {
                    guestList.splice(guestIndex, 1);
                }
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        } else {
            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
        }
    }
    guestList.forEach(guest => console.log(guest));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

    console.log('------------------');
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);