function sortArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function solution(statues) {
   
    sortArray(statues);
    
    let sum = 0;
    
    n = statues.length
    
    for (let i = n - 1; i >= 1; i--) {
        let x = statues[i] - statues[i - 1];
        if (x > 0) {
            sum += x - 1;
        }
        else {
            continue;
        }    
    }
    return sum;
}
