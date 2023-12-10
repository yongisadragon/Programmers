function solution(rsp) {
   let matchArr = {
       2 : 0,
       0 : 5,
       5 : 2
   }
   
   let result = [...rsp].map(e=>matchArr[e]).join('')
   return result
}