function solution(inputString) {
    let stack = [];

  for (let char of inputString) {
    if (char === ')') {
        let temp = '';

        while (stack.length && stack[stack.length - 1] !== '(') {
            temp += stack.pop();
        }  
        stack.pop();

        for (let i of temp) {
            stack.push(i);
        }
    } else {
        stack.push(char);
        }
    }
    return stack.join('');
}