function solution(str_list, ex) {
    
    //return str_list.filter(e=>!e.includes(ex)).join('')
    return str_list.reduce((acc,cur)=> acc + (cur.includes(ex) ? '' : cur) ,'')
}