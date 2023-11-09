function convert(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    };

    let jsonString =  JSON.stringify(obj);

        console.log(jsonString);

}

convert('George', 'Jones', 'Brown');