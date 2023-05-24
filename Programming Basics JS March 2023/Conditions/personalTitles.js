function personalTitles(input){
    let age = Number(input[0]);
    let title = input[1];

    if(age >= 16){
        if(title ==="m")
        {
            console.log("Mr.");
        } else{
            console.log("Ms.");
        }
    }
        else {
            if(age <16){
            if(title === "f"){
                 console.log("Miss");
            } else{
            console.log("Master");
        }
    }
}
}
    