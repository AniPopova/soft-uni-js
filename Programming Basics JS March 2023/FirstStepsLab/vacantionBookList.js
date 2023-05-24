// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]


function vacantionBookList(input){
    let pagesOfTheBook = Number(input[0]);
    let pagesPerHours= Number(input[1]);
    let days = Number(input[2]);
    let hoursPerDay  = (pagesOfTheBook/pagesPerHours)/days;

    console.log(hoursPerDay);

}
vacantionBookList(["212 ","20 ","2 "]);
vacantionBookList(["432 ","15 ","4 "]);