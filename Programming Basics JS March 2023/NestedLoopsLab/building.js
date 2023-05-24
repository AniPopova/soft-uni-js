function building(input){
    let floor = Number(input[0]);
    let appartament = Number(input[1]);

    for (let i = floor; i > 0; i--){
        let storage = "";
        for (let j = 0; j < appartament; j++) {   
           if(i === floor) {
            storage +=`L${i}${j} `;
           } else if(i % 2 === 0){
            storage +=`O${i}${j} `;
           } else {
            storage +=`A${i}${j} `;
           }       
        }
        console.log(storage);
    }
}

building(["4", "4"])