function solution(num_list) {
    let leng = num_list.length
    return num_list.reduce((a,c)=> leng >=11 ? a+c : a*c)
}