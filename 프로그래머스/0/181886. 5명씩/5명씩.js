function solution(names) {
    var answer = [];
    for(let x = 0; x<names.length; x+=5){
    answer.push(names[x])
    }
    return answer;
}