function solution(sequence) {
    
    let foundDecrease = false; 
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            if (foundDecrease) {
                return false; 
            }
            foundDecrease = true; 
            
            
            if (i > 0 && sequence[i - 1] >= sequence[i + 1] && i < sequence.length - 2 && sequence[i] >= sequence[i
            + 2]) {
                return false;
            }
        }
    }
    return true;
}
