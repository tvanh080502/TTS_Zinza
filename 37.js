function solution(inputArray, k) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += inputArray[i];
    }

    maxSum = currentSum;

    for (let i = k; i < inputArray.length; i++) {
        currentSum += inputArray[i] - inputArray[i - k]; 
        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }
    }

    return maxSum;
}
