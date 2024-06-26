function solution(inputArray) {
    let longest = inputArray[0].length
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length > longest){
            longest = inputArray[i].length;
        }
    }
    let longest_string = [];
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length === longest){
            longest_string[i] = inputArray[i];
        }
    }
    let longest_string_not_null = longest_string.filter(element => element !== null)
    return longest_string_not_null;
}
