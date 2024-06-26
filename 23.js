function solution(image) {
    let height = image.length;
    let width = image[0].length;
    let result = [];

    for (let i = 1; i < height - 1; i++) {
        let row = [];
        for (let j = 1; j < width - 1; j++) {
            let sum = 0;
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    sum += image[i + k][j + l];
                }
            }
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }
    return result;
}
