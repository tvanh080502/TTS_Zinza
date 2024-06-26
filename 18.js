function solution(inputString) {
    // Tạo một đối tượng để lưu trữ tần suất xuất hiện của các ký tự
    const charCount = {};

    // Đếm tần suất xuất hiện của từng ký tự trong chuỗi
    for (let char of inputString) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Đếm số ký tự có tần suất lẻ
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            oddCount++;
        }
    }

    // Chuỗi có thể là palindrome nếu chỉ có tối đa 1 ký tự có tần suất lẻ
    return oddCount <= 1;
}
