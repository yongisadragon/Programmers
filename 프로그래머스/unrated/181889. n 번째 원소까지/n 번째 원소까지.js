function solution(num_list, n) {
    let answer = num_list.filter((v,i)=>i<n);
    return answer;
}