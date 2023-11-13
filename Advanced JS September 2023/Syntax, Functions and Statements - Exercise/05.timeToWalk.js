function timeToWalk(steps, footSize, speed){
    let distance = footSize * steps;
    let metersPerSec = speed / 3.6;
    let time = distance / metersPerSec;
    let breaks = Math.floor(distance / 500);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));
    let hours = Math.round(minutes/60);
    let hoursToPrint = hours < 10 ? `0${hours}`: `${hours}`;
    let minutesToPrint = (minutes % 60) + breaks;
    let secondsToPrint = seconds % 60;
    minutesToPrint = minutesToPrint < 10 ? `0${minutesToPrint}` : `${minutesToPrint}`;
    secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;
    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);