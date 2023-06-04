function solution(num_list) {
    let sum = 0;
    let multi =1;
   for(let i=0; i<num_list.length; i++){
       sum += num_list[i]
       multi *= num_list[i]
   }
    if(multi<sum**2){
        return 1
    } else {
        return 0
    }
}