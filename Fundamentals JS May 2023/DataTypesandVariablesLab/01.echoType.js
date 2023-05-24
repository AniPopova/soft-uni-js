function echoType(something) {

    if (something !== null) {
        console.log(typeof (something));
        console.log(something);
    } else {
        console.log(typeof (something));
        console.log("Parameter is not suitable for printing");
    }

}

echoType(null);