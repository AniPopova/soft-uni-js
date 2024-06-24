function extractText() {
  let collectedItems = document.getElementsByTagName("li");
  let textarea = document.getElementById("result");
  for (let item of collectedItems) {
    textarea.value += item.textContent + "\n";
  }

  //   let check = document.getElementsByTagName("ul")[0].children;
  //   console.log("This is test" + check);
}
