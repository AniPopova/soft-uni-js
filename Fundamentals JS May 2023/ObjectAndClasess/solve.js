// let myObj = {
//     name: "Todor"
// }

// myObj.age = 30;
// let key = "name";

// console.log(myObj.age);
// console.log(myObj['name']);
// console.log(myObj[key]);

// function solve(key, value){
//     let myObj = {
//         name: "Todor"
//     }

//     myObj.age = 30;
//     myObj.hairColor = "blond";
//     myObj["sex"] = 'male';
//     myObj[key] = value;
//    // myObj.key = value; it does not give the expected result
//     console.table(myObj);

//     console.log(myObj[key]);
// }
// solve('sex', 'female');

// function solve(){
//     let myObj = {
//         name: "Todor"
//     }

//     myObj.age = 30;

//     // return {
//     //     name: "Todor",
//     //     age: 30,
//     //     sex: 'male',
//     // }
// //if we do not have such key in the object and we write myObj.familyName = "Todorov", this key and its value will be created
//     return myObj;
// }

//console.log(solve());

// function personInfo(firstName, lastName, age) {
//     let person = {
//         firstName,
//         lastName,
//         age,
//         // sayHello: function () {
//         //     console.log("hello");
//         sayHello: () => console.log('hello ' + firstName)

//     }
// return person.sayHello();
// }

// console.log(personInfo('Lily'));

// function personInfo(firstName, lastName, age) {
//     let person = {
//         firstName,
//         lastName,
//         age,
//         sayHello: () => console.log('hello ' + firstName)

//     };
// // return Object.keys(person);
//  return Object.values(person);
// //return Object.entries(person);
// }

// console.log(personInfo('Lily', 'Koleva', 30));

// function personInfo(firstName, lastName, age) {
//     let person = {
//         firstName,
//         lastName,
//         age,
//         sayHello: () => console.log('hello ' + firstName)

//     };

//     for (let key of Object.keys(person)) {
//         console.log(`${key} -> ${person[key]}`);
//     }
//     console.log('================');
//     for (let value of Object.values(person)) {
//         console.log(value);
//     }

//     console.log('================');
//     for (let entry of Object.entries(person)) {
//         console.log(entry);
//     }

// }

//personInfo('Lily', 'Koleva', 30);
// console.log('------------------------');
// function solve(){
//     let arr = [1,2,3,4];
//     let arr1 = arr;
//     arr.push(5);

//     console.log(arr);
//     console.log(arr1);

// }

// solve();
function solve() {
    let myJson = {
        "name": "Ivan",
        "age": 25,
        "grades": {
            "Math": [2.50, 3.50],
            "Chemistry": [4.50]
        }
    }

   
    console.log(myJson);
    console.log(JSON.stringify(myJson));
let obj2 = JSON.parse(JSON.stringify(myJson));
    console.log(obj2);
} 

solve()