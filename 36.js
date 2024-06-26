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

function solution(s) {
    let array = count(s);
    let count_char = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            count_char += 1;
        }
    }
    return count_char;
}
