function solution(upSpeed, downSpeed, desiredHeight) {
    let count = 0;
    let sum = 0;
    while (sum + upSpeed < desiredHeight) {
        sum += upSpeed - downSpeed;
        count++;
    }
    return count + 1;
}
