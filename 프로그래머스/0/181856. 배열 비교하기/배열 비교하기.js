function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1
    else if(arr1.length<arr2.length) return -1
    else if(arr1.length=arr2.length) {
       return arr1.reduce((a,c)=>a+c,0) > arr2.reduce((a,c)=>a+c,0) ? 1 : arr1.reduce((a,c)=>a+c,0) < arr2.reduce((a,c)=>a+c,0) ? -1 : 0
    }
}