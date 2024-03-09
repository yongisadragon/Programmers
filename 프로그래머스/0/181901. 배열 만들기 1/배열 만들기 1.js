function solution(n, k) {
    var answer = []
    for(let e of Array.from({length:n},(v,i)=>i+1)) if(!(e%k))answer.push(e)
    return answer;
}