function solution(num_list) {
    let add =[]
    let even =[]
    num_list.map((el)=> el%2 ? add.push(el) : even.push(el))
    return add.join('')*1 + even.join('')*1 
}