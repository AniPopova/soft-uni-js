function sortArrayByTwoCriteria(stringArray) {

    let sortedArray = stringArray.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } 
        return a.localeCompare(b);
    });

    // let sortedArray = stringArray.sort((a, b) => {
    //     if (a.length !== b.length) {
    //         return a.length - b.length || a.localeCompare(b);
    // }});

    console.log(sortedArray.join('\n'));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
console.log('-------------------------');
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

