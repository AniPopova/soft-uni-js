function echo(userInput) {
  let count = 0;
  for (let i = 0; i < userInput.length; i++) {
    count++;
  }
  console.log(count);
  console.log(userInput);
}

echo("Hello, JavaScript!");
echo("strings are easy");
