function solution(myString, pat) {
    let answer;
    answer = myString.toLowerCase().includes(pat.toLowerCase())? 1:0;
    return answer;
}