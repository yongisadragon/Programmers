function solution(num_list) {
    let sum = num_list.reduce((a,c)=>  a+c,0);
    let mul = num_list.reduce((a,c)=>  a*c,1);
   return (mul < sum*sum) ? 1:0;
}