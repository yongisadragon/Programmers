function solution(num_list) {
    for(let e=0; e<num_list.length; e++){
        if(num_list[e]<0) {
            return e; // 다돌면서 음수를 탐지
        }
    } // 그래도 음수가 없다면? 이라는 조건이므로 for문 바깥에 return -1
    return -1
}