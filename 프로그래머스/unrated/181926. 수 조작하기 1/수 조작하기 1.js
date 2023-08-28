function solution(n, control) {
    let x = n
    control.split('').forEach((e)=>{
        if(e==='w') {
            x++
        }else if(e==='s'){
            x--
        }else if(e==='d'){
            x+=10
        }else {
            x-=10
        }
        })
    return x;
}