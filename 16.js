function solution(a, b) {
    if (a.length !== b.length){
        return false;
    }
    let c = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c.push(i);
        }
    }
    if (c.length == 0){
        return true;
    }
    
    else if (c.length === 2){
        if (a[c[0]] === b[c[1]] && a[c[1]] === b[c[0]]) {
            return true;
        }
    }
    return false;
}
