function solution(n) {
    let s = n.toString();
    for (let i = 0; i < s.length; i++){
        let a = parseInt(s[i]);
        if (a % 2 !== 0) {
            return false;
        }
    }
    return true;
}
