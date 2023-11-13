function cookingByNumbers(number, op1, op2, op3, op4, op5) {
  let myNum = Number(number);
  let operations = {
    chop : (x)=> { let result = x / 2; console.log(result); return result},
    dice : (x)=> { let result = Math.sqrt(x); console.log(result); return result},
    spice : (x)=> { let result = x + 1; console.log(result); return result}, 
    bake : (x)=> { let result = x * 3; console.log(result); return result},
    fillet : (x)=> { let result =x * 0.80; console.log(result); return result}
  }

  myNum = operations[op1](myNum);
  myNum = operations[op2](myNum);
  myNum = operations[op3](myNum);
  myNum = operations[op4](myNum);
  myNum = operations[op5](myNum);

}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("=============");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
