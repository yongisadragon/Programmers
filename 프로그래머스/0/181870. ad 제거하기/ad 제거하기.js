function solution(strArr) {
    return strArr.filter((e,i)=>e.includes('ad')?'':e).sort((a,b)=>a-b)
}