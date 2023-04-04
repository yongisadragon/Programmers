function solution(denum1, num1, denum2, num2) {
  let answer = [];
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;

  let minNum;
  if (denum < num) {
    minNum = denum;
  } else {
    minNum = num;
  }
    
  while (true) {
    if (denum % minNum === 0 && num % minNum === 0) {
      return [denum / minNum, num / minNum];
    }
    minNum -= 1;
  }
}