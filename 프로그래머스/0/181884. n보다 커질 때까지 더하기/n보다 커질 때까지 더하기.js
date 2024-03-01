function solution(numbers, n) {
    let answer = 0;
    
    for (let a of numbers)
       { answer+=a
       if(answer>n)
           break;
       }    
   return answer;
}