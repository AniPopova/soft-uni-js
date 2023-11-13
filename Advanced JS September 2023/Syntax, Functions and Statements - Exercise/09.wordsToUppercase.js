function wordsToUppercase(input){
    let sentence = input.split(/[^a-zA-Z0-9]+/gm);
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].toUpperCase();
        
    }
    if(!sentence[sentence.length - 1]){
        sentence.pop();
    }
    console.log(sentence.join(", "));

}

wordsToUppercase('Hi, how are you?');
console.log("--------------------");
wordsToUppercase("HELLO");