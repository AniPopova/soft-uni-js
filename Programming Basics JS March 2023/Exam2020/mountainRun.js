function mountainRun(input) {

    let recordNow = Number(input[0]);
    let meterToClimb = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let delay = Math.floor((meterToClimb / 50))*30;

    let geogeTime = (meterToClimb * timePerMeter) + delay;

    if(geogeTime < recordNow){
        console.log(`Yes! The new record is ${geogeTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(Math.abs(recordNow-geogeTime)).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377",
"389",
"3"])	



