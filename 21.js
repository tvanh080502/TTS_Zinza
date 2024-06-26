function charToNumberOrNull(char) {
    if (!isNaN(char)) {  
        return Number(char);  
    } else {
        return null;
    }
}

function check_0(char) {
    if (char.length < 2){
        return char;
    }
    if (char[0] === '0') {
        return null;
    }
    return char;
}

function solution(inputString) {
    let array1 = inputString.split('.');
    
    if (array1.length !== 4){
        return false;
    }
    
    for (let i = 0; i < array1.length; i++){
        if (array1[i] === '' || check_0(array1[i]) === null){
            return false;
        }
    }
    
    let array2 = [];
    for (let i = 0; i < 4; i++){
        array2[i] = charToNumberOrNull(array1[i]);
    }
    
    for (let i = 0; i < array2.length; i++){
        if (array2[i] > 255 || array2[i] < 0 || array2[i] === null){
            return false;
        }
    }
    return true;
}
