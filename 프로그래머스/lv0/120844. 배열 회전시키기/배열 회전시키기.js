function solution(numbers, direction) {
    let leng = numbers.length -1
   if(direction==='right'){
       numbers.unshift(numbers[leng])
        numbers.pop()
       return numbers
   } else {
       numbers.push(numbers[0])
       numbers.shift()
       return numbers
   }
}