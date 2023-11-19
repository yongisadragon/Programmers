function solution(box, n) {
    let answer = box.map((e)=>Math.floor(e/n)).reduce((a,c)=>a*c,1)
    return answer;
}