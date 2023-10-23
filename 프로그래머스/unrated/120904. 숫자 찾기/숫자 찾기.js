function solution(num, k) {
    //indexOf() 는 일치하는 값의 인덱스를 반환. 없으면 -1. findIndex(()=>{})는 콜백함수형태로 검사를 해줌. {}에는 조건이옴. 반환해주는 값은 일치하는 인덱스 혹은 -1로 indexOf()와 동일.
    return num.toString().split('').map((el)=>Number(el)).indexOf(k) + 1 || -1
}