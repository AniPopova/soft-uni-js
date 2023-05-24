function greetTodor(input){
    let name = input[0];
    let age = Number(input[1]);
    let town = input[2];
    console.log(name);
    console.log(age+2);
    console.log(town);
}

greetTodor(["Todor", "30", "Sofia"]);

function squareArea(input){
    let a = Number(input[0]);
    let area = a*a;
    console.log(area);
}

squareArea([5]);