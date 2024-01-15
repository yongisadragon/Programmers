function solution(n) {
    let add = 0;
    let even = 0;
    for (let i=0; i<=n; i++){
        i%2 ? add+=i : even+=i**2
    }
   return n%2 ? add : even
}