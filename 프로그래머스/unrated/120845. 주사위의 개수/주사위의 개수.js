function solution(box, n) {
    let answer = box.reduce((a,c)=>a*Math.floor(c/n),1)
    return answer;
}