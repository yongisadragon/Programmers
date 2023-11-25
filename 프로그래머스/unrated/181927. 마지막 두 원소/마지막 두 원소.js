function solution(num_list) {
    let last = num_list[num_list.length-1]
    let beforeLast = num_list[num_list.length-2]
    let answer = [...num_list]
    last > beforeLast? answer.push(last-beforeLast) : answer.push(last*2)
    return answer;
}