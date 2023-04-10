function solution(num_list) {
    let result=[];
    for(let i=1; i<=num_list.length; i++){
        result.push(num_list[num_list.length-i])
    }
    return result;
}