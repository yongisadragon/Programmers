function solution(n) {
    const arr = [];
    for(let i=0; i<=n; i++){
        if(n%i===0) {
            arr.push(i)
        }
    }
    return arr.reduce((a,c)=>a+c,0)
}