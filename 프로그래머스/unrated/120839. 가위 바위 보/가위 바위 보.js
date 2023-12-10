function solution(rsp) {
   let result = rsp.split('').map((el)=>{
        switch(el){
            case '2': 
                return 0
                break;
            case '0':
                return 5
                break;
            case '5':
                return 2
            default:
                return el;
        }
    })
   return result.join('')
}