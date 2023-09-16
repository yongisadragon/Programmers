function solution(num_list) {
    let leng = num_list.length
    return leng>=11 ? num_list.reduce((a,c)=>a+c) : num_list.reduce((a,c)=>a*c)
}