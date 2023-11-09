function personInfo(firstName, lastName, age){
    let person = {
        firstName,
        lastName,
        age
    };
return person;
}

console.log(personInfo("Peter", "Pan", 30));
console.log('----------------------------');
function personInfo(firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

return person;
}

console.log(personInfo("Jack", "Sparrow", "unnknown"));
console.log('---------------------------------------');
function personInfo(firstName, lastName, age){
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
return person;
}

console.log(personInfo("Peter", "Pan", 30));