function nextDay(year, month, day){
    let next = new Date(year, month-1, day +1);
  //  console.log(next);
    console.log(`${next.getFullYear()}-${next.getMonth()+1}-${next.getDate()}`);

}

nextDay(2016, 9, 30);
console.log('-------------------');
nextDay(2023, 2, 28);
