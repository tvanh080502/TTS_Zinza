function solution(n) {
    let sum1 = 0;
    
    for (let i = 1; i < 2 * n; i += 2){
        sum1 += i;
    }
    return sum1 * 2 - 2 * n + 1; 
}
