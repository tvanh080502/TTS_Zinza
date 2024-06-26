function solution(matrix) {
    // Lấy số lượng hàng và cột của ma trận đầu vào
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Tạo một ma trận kết quả với cùng kích thước và khởi tạo giá trị ban đầu là 0
    const result = Array.from(Array(rows), () => Array(cols).fill(0));

    // Duyệt qua từng ô trong ma trận đầu vào
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Nếu ô hiện tại có mìn (giá trị là true)
            if (matrix[row][col]) {
                // Cập nhật giá trị cho 8 ô xung quanh ô hiện tại
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        // Bỏ qua ô hiện tại
                        if (i === 0 && j === 0) continue;
                        // Tính toán vị trí mới của ô xung quanh
                        const newRow = row + i;
                        const newCol = col + j;
                        // Kiểm tra xem vị trí mới có nằm trong giới hạn của ma trận không
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                            // Tăng giá trị của ô xung quanh thêm 1
                            result[newRow][newCol]++;
                        }
                    }
                }
            }
        }
    }
    return result;
}

