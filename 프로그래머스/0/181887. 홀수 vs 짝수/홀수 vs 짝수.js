function solution(num_list) {
    let add = 0
    let even = 0
    for(let i =0; i<num_list.length; i++){
        (i+1)%2 ? add+=num_list[i] : even+=num_list[i]
    }
    return add>even ? add : even
}
