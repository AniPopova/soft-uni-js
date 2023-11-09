function toObject(json){

    let newType = JSON.parse(json);

    for(let [key, value] of Object.entries(newType)){
        console.log(`${key}: ${value}`);
    }

}

toObject('{"name": "George", "age": 40, "town": "Sofia"}');