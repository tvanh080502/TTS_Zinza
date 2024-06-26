function solution(picture) {
    let cols = picture[0].length
    let rows = picture.length
    let matrix = [];
    
    matrix.push('*'.repeat(cols + 2));
    for (let i = 0; i < rows; i++){
        matrix.push('*' + picture[i] + '*');
    }
    matrix.push('*'.repeat(cols + 2));
    return matrix;
}
