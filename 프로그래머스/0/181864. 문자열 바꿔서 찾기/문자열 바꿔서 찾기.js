function solution(myString, pat) {
    return +!!myString.split('').map((e)=>e=='A'?e.replace('A','B'):e.replace('B','A')).join('').match(pat)
}