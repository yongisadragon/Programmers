function solution(my_str, n) {
  let result = []
  for (let i = 0; i < my_str.length; i += n) //i는 0부터 시작해서 그 다음은 n=6이라고 그 다음 i=6 아래 slice는 slice(6,12)
  result.push(my_str.slice(i, i + n)); //인덱스는 첫번째가 0이니까 i+n을 해주면 n=6이라고 해도 6개씩 잘린다.
  return result;
}