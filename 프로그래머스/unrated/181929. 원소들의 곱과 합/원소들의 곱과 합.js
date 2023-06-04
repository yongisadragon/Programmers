function solution(num_list) {
    let sum = 0;
    let multi =1;
   for(const i of num_list) {
       sum += i
       multi *= i
   }
   return multi < sum*sum ? 1:0;
}