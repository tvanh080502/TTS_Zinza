function solution(inputArray) {
    let n = -Infinity;
    for (let i = 0; i < inputArray.length - 1; i++) {
        m = inputArray[i] * inputArray[i+1];
        if (m > n) {
            n = m;
        }
        else {
            continue;
        }
    }
    return n;
}
