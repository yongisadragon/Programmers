function solution(order) {

    let newSet = new Set([3,6,9]);
    return order.toString().split('').filter(el=>newSet.has(parseInt(el))).length;
}