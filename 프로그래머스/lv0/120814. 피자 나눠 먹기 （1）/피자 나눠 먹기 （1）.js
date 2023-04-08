function solution(n) {
    let sum=0;
    return n%7===0 ? sum+=n/7 : sum+=parseInt(n/7)+1;
}