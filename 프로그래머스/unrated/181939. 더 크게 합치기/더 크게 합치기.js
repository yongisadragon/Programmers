function solution(a, b) {
   const cal = (a,b) => `${a}${b}`
   return Math.max(cal(a,b),cal(b,a))
}