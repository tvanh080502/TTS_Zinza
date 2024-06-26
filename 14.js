function solution(a) {
    let s = [];
    for (let i = 0; i < 2; i++) {
        s.push(0); 
    }
    for (let i = 0; i < a.length; i++){
        if (i % 2 === 0){
            s[0] += a[i];
        }
        else{
            s[1] += a[i];
        }
    }
    return s;   
}
