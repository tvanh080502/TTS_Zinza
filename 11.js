function solution(n) {
    let m = n.toString();
    
    if (m.length % 2 !== 0) {
        return false;
    }
    
    let sum1 = 0;
    for (let i = 0; i < m.length; i++) {
        sum1 += parseInt(m[i]);
    }
    
    let sum2 = 0;
    for (let i = 0; i < m.length / 2; i++) {
        sum2 += parseInt(m[i]);
    }
    if (2 * sum2 === sum1){
        return true;
    }
    else{
        return false;
    }
}
