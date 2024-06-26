function solution(inputString) {
    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] >= '0' && inputString[i] <= '9'){
            return inputString[i];
        }
    }
}
