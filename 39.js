function solution(value1, weight1, value2, weight2, maxW) {
    const obj = {
        [weight1]: value1,
        [weight2]: value2,
    };
    const _return = [0, Math.max(value1, value2), value1 + value2, obj[Math.min(weight1, weight2)]];
    if (maxW < Math.min(weight1, weight2)) {
        return _return[0];
    }
    if (maxW === Math.min(weight1, weight2)) {
        return _return[3];
     }
    if (maxW >= weight1 + weight2) {
        return _return[2];
    }
    return _return[1];
}
