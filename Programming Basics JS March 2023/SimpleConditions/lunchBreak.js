// 1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]


function lunchBreak(input){
    let movie = input[0];
    let timePerEpisode = Number(input[1]);
    let breakDuration = Number(input[2]);
    let breakTime = (1/8) * breakDuration;
    let freeTime = (1/4) * breakDuration;
    let timeLeft = breakDuration - (breakTime+freeTime);
    let remainingTime = 0;

    if(timeLeft >= timePerEpisode){
        remainingTime = Math.ceil(timeLeft - timePerEpisode);
        console.log(`You have enough time to watch ${movie} and left with ${remainingTime} minutes free time.`);
    } else{
        remainingTime = Math.ceil(timePerEpisode - timeLeft);
        console.log(`You don't have enough time to watch ${movie}, you need ${remainingTime} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);

