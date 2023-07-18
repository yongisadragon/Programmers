function solution(my_string) {
   let str =  my_string.split('').map(el=>{
       if(el === el.toUpperCase()) {return el.toLowerCase()}
else {return el.toUpperCase()}
   })
  return str.join('')
}