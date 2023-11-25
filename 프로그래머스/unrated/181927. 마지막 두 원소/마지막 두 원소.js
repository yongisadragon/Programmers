function solution(num_list) {
    const [last,before] = [...num_list].reverse()
    return [...num_list,last>before?last-before:last*2]
}