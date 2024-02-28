function solution(arr) {
    var answer = [];
    for(let v of arr){
        if(v>=50 && v%2==0) answer.push(v/2)
        else if(v>=50 && v%2) answer.push(v)
        else if(v<50 && v%2) answer.push(v*2)
        else answer.push(v)
    }
    return answer;
}