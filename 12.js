function solution(a) {
    let heights_array = [];
    for (let i = 0; i < a.length; i++){
        if (a[i] !== -1){
            heights_array[i] = a[i];
        }
    }
    heights_array.sort((a, b) => b - a);
    
    let count = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] !== -1) {
        a[i] = heights_array[count];
        count++;
        }
    }
    return a;
}
