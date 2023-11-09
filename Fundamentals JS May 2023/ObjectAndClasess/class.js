class Student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    speak(){
        console.log(`Hello ${this.name}`);
    }
}

let myStudent = new Student("Ani", 6);

console.table(myStudent);
myStudent.speak();
console.log(myStudent.name);
console.log(myStudent['grade']);