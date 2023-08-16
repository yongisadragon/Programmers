function solution(my_string) {
    let answer = [...my_string].map((el)=>el.toLowerCase()).sort()
    return answer.join('');
}