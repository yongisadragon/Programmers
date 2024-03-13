function solution(myString, pat) {
    let answer;
    answer = +myString.toLowerCase().includes(pat.toLowerCase())
    return answer;
}