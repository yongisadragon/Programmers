function solution(my_string) {
   return my_string.split('').map(el=>
         el.match(/[a-z]/g)? el.toUpperCase():el.toLowerCase() )
  .join('')
}