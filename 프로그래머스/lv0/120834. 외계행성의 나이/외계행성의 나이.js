function solution(age) {
    let ages = (''+age).split('')
    return ages.map((item)=>{
         switch(item){
         case '0': 
         item = item.replace(item,'a')
         break;
                 
         case '1': 
         item = item.replace(item,'b')
         break;
                                  
         case '2': 
         item = item.replace(item,'c')
         break;     
                 
         case '3': 
         item = item.replace(item,'d')
         break;   
                 
         case '4': 
         item = item.replace(item,'e')
         break;    
                 
         case '5': 
         item = item.replace(item,'f')
         break;   
                 
         case '6': 
         item = item.replace(item,'g')
         break;   
                 
         case '7': 
         item = item.replace(item,'h')
         break;
                        
         case '8': 
         item = item.replace(item,'i')
         break;
                                  
         case '9': 
         item = item.replace(item,'j')
         break;
    }
        return item;
    }).join('')
}