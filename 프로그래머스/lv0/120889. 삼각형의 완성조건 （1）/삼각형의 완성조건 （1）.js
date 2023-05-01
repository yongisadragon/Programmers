function solution(sides) {
   const acd = sides.sort((a,b) => b-a)
   return acd[0]<(acd[1]+acd[2])?1:2;

}