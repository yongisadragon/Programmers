function solution(arr1, arr2) {
    let answer = 0;
    let leng1 = arr1.length
    let leng2 = arr2.length
    let add1 = arr1.reduce((a,c)=>a+c,0)
    let add2 = arr2.reduce((a,c)=>a+c,0)
    if (leng1 !== leng2) {
        answer = leng1 > leng2 ? 1 : -1;
    }else {
       answer = add1 > add2 ? 1 : add1 < add2 ? -1 : 0;
    }
    return answer;
}