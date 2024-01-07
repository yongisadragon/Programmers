function solution(hp) {
    let ants = [5,3,1]
    let min = []
    
    for ( let i of ants) {
        
        min.push(Math.floor(hp/i))   
        hp %= i
        
    }
    
    return min.reduce((a,c)=>a+c,0)
}