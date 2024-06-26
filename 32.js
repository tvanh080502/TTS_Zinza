function solution(a) {
    if (a.length % 2 == 0) {
        let n = Math.floor(a.length / 2 - 1);
        return a[n];
    }
    let n = Math.floor(a.length / 2);
        return a[n];
}
