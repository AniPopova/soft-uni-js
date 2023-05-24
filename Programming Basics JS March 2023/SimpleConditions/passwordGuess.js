function passwordGuess(input){
let password = input[0];
let realPassword = "s3cr3t!P@ssw0rd";

if(realPassword === password){
    console.log("Welcome");
}
else{
    console.log("Wrong password!");
}
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);


