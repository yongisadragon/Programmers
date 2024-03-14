// 이건 5번째나 6번쨰가 중복된 숫자라면 안됨. ( '_' 가 숫자의 크기 자체를 비교하기 때문. 작은 5개의 숫자보다 높은 '인덱스'를 가진수들을 골라야하니 인덱싕 비교가 필요함.) const solution = (n) => n.sort((a,b)=>a-b).filter((_,i)=>_>=n[4]) 

const solution = (n)=> n.sort((a,b)=>a-b).filter((_,i)=>i>4)