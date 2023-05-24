function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentFullSpace = Number(input[3])/100;

    let totalVolume = (lenght*width*height) / 1000;
    let takenVolume = totalVolume * percentFullSpace;
    let freeVolume = totalVolume - takenVolume;

    console.log(freeVolume);

}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
);