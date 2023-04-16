function solution(numbers) {
    const reverse = numbers.sort((a,b)=>b-a);
    for (const i of reverse){
        const result = reverse[0]*reverse[1];
        return result;
    }
}