function solution(num_list, n) {
   let result = new Set(num_list)
   return result.has(n)?1:0
}