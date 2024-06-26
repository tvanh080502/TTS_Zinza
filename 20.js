function solution(inputArray) {
    let a = Math.abs(inputArray[0] - inputArray[1]);
    for (let i = 1; i < inputArray.length - 1; i++){
        b = Math.abs(inputArray[i] - inputArray[i + 1]);
        if (a < b){
            a = b;
        }
    }
    return a;
}
