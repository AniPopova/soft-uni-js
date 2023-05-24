function workingHours(input){
    let hour = Number(input[0]);
    let weekDay = input[1];

    if(hour >=10 && hour <19){
        switch(weekDay){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log("open");
            break;
            default: console.log("closed");
            break;
        } 
     }else{
        console.log("closed");
        }
}
// workingHours(["11","Monday"]);
 workingHours(["19","Friday"]);
//workingHours(["11","Sunday"]);
