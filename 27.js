function solution(name) {
    // Biểu thức chính quy để kiểm tra tên biến
    const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
    // Kiểm tra xem chuỗi có khớp với biểu thức chính quy hay không
    return regex.test(name);
}
