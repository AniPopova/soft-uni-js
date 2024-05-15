"use strict";

function daysInAMonth(month, year) {
  console.log(new Date(year, month, 0).getDate());
}

daysInAMonth(2, 2012);
daysInAMonth(2, 2021);
