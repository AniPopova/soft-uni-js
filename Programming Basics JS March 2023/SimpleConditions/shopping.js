
function shopping(input){
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let processorPrice = (videoCards *250)*(35/100);
    let ramMemorry = Number(input[3]);
    let ramPrice = (videoCards * 250)*(10/100);
    let totalSum = videoCards * 250 + processors * processorPrice + ramMemorry *ramPrice;

    if(videoCards > processors){
        totalSum = totalSum - (totalSum * (15/100));}
        else{
            totalSum = totalSum;
        }
        let money = 0;
        if(budget >= totalSum){
            money = budget - totalSum;
            console.log(`You have ${money.toFixed(2)} leva left!`);
        } else{
            money = totalSum - budget;
            console.log(`Not enough money! You need ${money.toFixed(2)} leva more!`);
        }
    }

shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);

