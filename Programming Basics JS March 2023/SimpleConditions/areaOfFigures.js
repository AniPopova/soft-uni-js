function areaOfFigures(input){
    let figure = input[0];
    let area = 0;
    let sideA = 0;
    if(figure === "square"){
        sideA = Number(input[1]);
        area = sideA*sideA;
    }else if(figure === "rectangle"){
        sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA*sideB;
    }else if(figure === "circle"){
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    }else {
        sideA = Number(input[1]);
        let height = Number(input[2]);
        area = sideA * height /2;
    } 
    console.log(figure, area.toFixed(3));
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle","7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);

