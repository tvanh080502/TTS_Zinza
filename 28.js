function solution(inputString) {
    let result = '';
    
    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);

        // Kiểm tra nếu ký tự là chữ cái thường
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + 1) % 26) + 97);
        }
    }
    
    return result;
}
