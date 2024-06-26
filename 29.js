function ColumnIndex(char) {
    return char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
}

function solution(cell1, cell2) {
    // Hàm để chuyển ký tự cột thành số
    function getColumnIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    
    // Lấy chỉ số hàng và cột của cell1
    let col1 = getColumnIndex(cell1[0]);
    let row1 = parseInt(cell1[1]);
    
    // Lấy chỉ số hàng và cột của cell2
    let col2 = getColumnIndex(cell2[0]);
    let row2 = parseInt(cell2[1]);

    // Kiểm tra màu của ô
    let color1 = (col1 + row1) % 2;
    let color2 = (col2 + row2) % 2;
    
    // Nếu cả hai màu đều bằng nhau, thì các ô có cùng màu
    return color1 === color2;
}
