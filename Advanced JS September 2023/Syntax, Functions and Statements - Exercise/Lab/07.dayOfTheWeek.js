"use strict";

function dayOfTheWeek(day) {
  let givenDay;
  switch (day) {
    case "Monday":
      givenDay = 1;
      break;
    case "Tuesday":
      givenDay = 2;
      break;
    case "Wednesday":
      givenDay = 3;
      break;
    case "Thursday":
      givenDay = 4;
      break;
    case "Friday":
      givenDay = 5;
      break;
    case "Saturday":
      givenDay = 6;
      break;
    case "Sunday":
      givenDay = 7;
      break;
    default:
      givenDay = "error";
  }

  console.log(givenDay);
}

dayOfTheWeek("Monday");
dayOfTheWeek("Sunday");
dayOfTheWeek("blabla");
