function circleArea(input) {
  let inputType = typeof input;
  let area = 0;
  if (inputType === "number") {
    area = Math.pow(input, 2) * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
  }
}

circleArea(5);
circleArea("name");
