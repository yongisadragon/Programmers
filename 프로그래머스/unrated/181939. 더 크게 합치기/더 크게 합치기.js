function solution(a, b) {
    let aa = (''+a+b)*1
    let bb = (''+b+a)*1
    return aa >= bb ? aa : bb
}