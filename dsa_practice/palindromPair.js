let s = "aabb"

let result  =[]
 let path =[]

function get(s ,index , path ){
    if(index === s.length){
        result.push(path) 
         return
    }
    for(let i = index ; i< s.length ; i++){
        if(isPalindrom(s , index , i)){
            path.push(s.substr(index , i-index +1))
            get(s , i+1 , path )
            path.pop()
        }
    }
}
function isPalindrom(s , a ,l){
    while(a <= l){
        if(s[a] !== s[l]){
            return false
        }
        a++
        l--
    }
    return true
}
   get(s, 0 , path)

console.log(result)