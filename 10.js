function count(s) {
        
    let count1 = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            count1[charCode - 97]++;
        }
    }
    return count1;
}
function solution(s1, s2) {
    
    let string1 = count(s1);
    let string2 = count(s2);
    
    let sum = 0;
    
    for (let i = 0; i < 26; i++) {
        if (string1[i] > string2[i]) {
            sum += string2[i];
        }
        else if (string2[i] > string1[i]) {
            sum += string1[i];
        }
        else if (string1[i] === string2[i] && string1 !== 0){
            sum += string1[i];
        }
    }
    return sum;
}
