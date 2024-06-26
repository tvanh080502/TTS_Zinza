function solution(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    
    let sum = 0;
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            if (matrix[j][i] === 0){
                break;
            }
            sum += matrix[j][i];
        }
    }
    return sum;
}
