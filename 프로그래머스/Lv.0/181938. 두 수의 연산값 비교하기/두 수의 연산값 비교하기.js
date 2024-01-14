function solution(a, b) {
    let plus = Number(a+''+b);
    let mult = 2*a*b;
   return plus>=mult ? plus : mult;
}