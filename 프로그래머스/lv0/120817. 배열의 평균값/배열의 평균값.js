    function solution(numbers){
    const addArr = numbers.reduce((a,c) => a + c , 0);
    const average = addArr / numbers.length;
    return average;
}