function solution(n) {
    let sum = 0;
    for(i=1; i<=n; i++){
            if(n%i===0) sum++;
    }
    return sum;
}
