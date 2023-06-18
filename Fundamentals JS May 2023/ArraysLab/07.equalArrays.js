function equalArrays(arr1, arr2){
    let arrEqual = true;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum +=arr2[i];
        if(arr1[i] === arr2[i]){
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
        
    }

}

equalArrays(['10','20','30'],
['10','20','30']);