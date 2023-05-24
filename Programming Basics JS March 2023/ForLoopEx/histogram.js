function histogram(input){
    let n = Number(input[0]);
    let range1 = 0;
    let range2 = 0;
    let range3 = 0;
    let range4 = 0;
    let range5 = 0;

    for(let i = 1; i <= n; i++){
        let current = Number(input[i]);
        if(current < 200){
            range1++;
        } else if(current <= 399){
            range2++;
        }else if(current <= 599){
            range3++;
        }else if(current <= 799){
            range4++;
        } else{
            range5++;
        }
    }
    let range1Percent = (range1 / n) *100;
    let range2Percent = (range2 / n) *100;
    let range3Percent = (range3 / n) *100;
    let range4Percent = (range4 / n) *100;
    let range5Percent = (range5 / n) *100;

    console.log(`${range1Percent.toFixed(2)}%`);
    console.log(`${range2Percent.toFixed(2)}%`);
    console.log(`${range3Percent.toFixed(2)}%`);
    console.log(`${range4Percent.toFixed(2)}%`);
    console.log(`${range5Percent.toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"]);
