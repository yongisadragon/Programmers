function solution(number, n, m) {
    let answer = (number % n || number % m) ? 0 : 1
    return answer;
}