function solution(my_string) {
     return [...my_string].filter((e)=>!isNaN(e)).sort((a,b)=>a-b).map((el)=>parseInt(el))
}