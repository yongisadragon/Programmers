function solution(num, k) {
    let arr = num.toString().split('')
     let answer = arr.findIndex((a)=>a==k.toString())
     return answer !== -1 ? answer+1 : -1
}