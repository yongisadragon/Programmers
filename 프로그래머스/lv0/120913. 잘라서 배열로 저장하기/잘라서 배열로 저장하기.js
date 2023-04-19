function solution(my_str, n) {
  const reg = new RegExp(`.{1,${n}}`, "g");
  return my_str.match(reg);
}