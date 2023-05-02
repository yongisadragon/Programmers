function solution(money) {
    var answer = [];
    let cups = parseInt(money/5500);
    let rest = money%5500;
    answer.push(cups,rest);
    return answer;
}