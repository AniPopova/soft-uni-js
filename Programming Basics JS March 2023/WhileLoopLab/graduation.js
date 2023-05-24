function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let schoolYear = 1;
    let sumGrades = 0;
    let excluded = 0;
    let isExcluded = false;

    while (schoolYear <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            excluded++;
            if (excluded > 1) {
                isExcluded = true;
              
                break;
            }
            continue;
        } 
        sumGrades += grade;
        schoolYear++;
    }
    if(isExcluded === true){
        console.log(`${name} has been excluded at ${schoolYear} grade`);
    }else{
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
