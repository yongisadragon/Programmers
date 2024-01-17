function solution(numbers) {
    let arr = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let added = numbers[i]*numbers[j]
            arr.push(added)
        }
    }
  
    return Math.max(...arr)
}