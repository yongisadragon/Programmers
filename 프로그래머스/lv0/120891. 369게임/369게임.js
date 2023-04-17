function solution(order) {
    return String(order).split(/[369]/g).length - 1;
}