function solution(n_str) {
    var answer = '';
    for (i in n_str) {
        answer += n_str[i]
    }
    return +answer;
}