function stringLength(input1, input2, input3) {
  let s1 = Number(input1.length);
  let s2 = Number(input2.length);
  let s3 = Number(input3.length);
  let total = s1 + s2 + s3;
  console.log(total);
  console.log(Math.round(total / 3));
}
stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
