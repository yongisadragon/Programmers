function solution(n) {
   
   let pizza = 1;
    while(pizza*6%n){ //while 안의 조건이 0이 될때까지 pizza는 더해짐. 즉, pizza*6은 조각의 수 이기때문에, 조각의 수가 인원으로 정확하게 나뉘어 0이 될때까지 pizza가 더해지는구조.
        pizza++
    }
    return pizza;
}