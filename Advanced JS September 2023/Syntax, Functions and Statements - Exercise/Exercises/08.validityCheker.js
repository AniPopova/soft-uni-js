function validityChecker(x1, y1, x2, y2) {
  const checkDistance = (x1, y1, x2, y2) => {
    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    if (distance % 1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  };

  checkDistance(x1, y1, 0, 0);
  checkDistance(x2, y2, 0, 0);
  checkDistance(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
console.log("*****************");
validityChecker(2, 1, 1, 1);
