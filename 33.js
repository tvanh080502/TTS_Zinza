function solution(inputArray) {
    function differByOneChar(str1, str2) {
        let count = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                count++;
                if (count > 1) {
                    return false;
                }
            }
        }
        return count === 1;
    }

    function backtrack(path, remaining) {
        if (remaining.length === 0) {
            return true;
        }

        for (let i = 0; i < remaining.length; i++) {
            if (path.length === 0 || differByOneChar(path[path.length - 1], remaining[i])) {
                if (backtrack([...path, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i + 1)])) {
                    return true;
                }
            }
        }
        return false;
    }

    return backtrack([], inputArray);
}
 