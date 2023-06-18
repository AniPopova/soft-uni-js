function nxNMatrix(num) {

    function roeGenerator() {
        let row = '';
        for (let j = 1; j <= num; j++) {
            row += `${num} `;
        }
        return row;
    }

    for (let i = 1; i <= num; i++) {
        console.log(roeGenerator());
    }
}

nxNMatrix(7);
console.log('-------------------');
nxNMatrix(3);