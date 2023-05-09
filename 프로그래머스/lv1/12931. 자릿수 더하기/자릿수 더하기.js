function solution(n){
    return (n+'').split('').reduce((a,c)=>a+c*1,0)
}