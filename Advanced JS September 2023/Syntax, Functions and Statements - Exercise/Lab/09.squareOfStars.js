function squareOfStars(stars) {
  let num = Number(stars);
  for (let i = 0; i < num; i++) {
    let side = "";
    for (let j = 0; j < num; j++) {
      side += "* ";
    }
    console.log(side);
  }
}

squareOfStars(5);
