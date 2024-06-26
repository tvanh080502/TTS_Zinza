function solution(year) {
    let a = Math.floor(year / 100);
    let b = a * 100;
    let c = year - b;
    
    if (c == 0) {
        return a;
    }
    else {
        return a + 1;
    }
}