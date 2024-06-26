function solution(inputArray) {
    inputArray.sort();
    let a = inputArray.length
    let max = inputArray[a-1];
    let b = 2;
    let found = false;

    while (!found) {
        found = true; 
        for (let num of inputArray) {
            if (num % b === 0) {
                found = false;
                break; 
            }
        }
        if (!found) {
            b++; 
        }
    }

    return b;
}
