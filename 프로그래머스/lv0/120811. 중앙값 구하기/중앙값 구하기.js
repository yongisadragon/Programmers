function solution(array) {
    const leng = array.sort((a,b)=>b-a).length;
    const mid = array[(leng-1)/2];
    return mid;
}