function solution(inputString) {
    
    let prefix = "";
    
    // Remove leading spaces
    inputString = inputString.trim();
    
    for (let char of inputString) {
        if (char >= '0' && char <= '9') {
            prefix += char;
        } else {
            break;
        }
    }
    
    return prefix;
}
