function solution(array, height) {
    let answer = array.filter((friend)=>friend > height);
    return answer.length;
}