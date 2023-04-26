function solution(my_string) {
    const result = [];
    const arr2 = my_string.split('');
    for(let i = arr2.length; i>=0; i--){
        result.push(arr2[i])
    }
    return result.join('');
}