function solution(s1, s2) {
    const a = new Set(s1)
    const b = new Set(s2)
    
    const common = [...a].filter((el)=>b.has(el));
    return common.length;
}