function reverseString(word){
    let reversedWord = "";
    for (let i = word.length; i >= 0; i--) {
       
        reversedWord += word.charAt(i);
 
    }
    console.log(reversedWord);
}

reverseString('1234');