function solution(hp) {
    const a = parseInt(hp/5)
    const b = parseInt((hp-a*5)/3)
    const c = hp - a*5 - b*3
    return a + b + c
}