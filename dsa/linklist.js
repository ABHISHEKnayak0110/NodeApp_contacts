class Node{
    constructor(data =null){
        this.data = data
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = null
        this.size =0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    preprend(data){
        const node = new Node(data)
       if(this.isEmpty()){
         this.head = node
         this.size ++ 
         return
       }
       node.next = this.head 
       this.head = node
       this.size++

    }
    print(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
    append(data){
        const node = new Node(data)
        if(this.isEmpty()){
            this.head = node
            this.size++
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
        this.size++

    }
    insert(index , value){
        if(index <0 || index > this.size){
            return 
        }
        if(index === 0){
            this.preprend(value)
        }
        else{
            const node = new Node(value)
            const curr = this.head
            for(let i =0; i< index-1 ; i++){
                curr = curr.next
            }
            node.next= curr.next
            curr.next = node
            this.size++

        }

    }
    remove(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.data === value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let curr = this.head 
            while(curr.next && curr.next.data !==value){
                curr = curr.next
            }
            curr.next = curr.next.next
            this.size--
            return value
        }
    }
    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev 
            prev = curr
            curr = next
        }
        this.head = prev
    }
}
const list = new LinkList()
 list.append(1)
list.append(2)
list.insert(1 ,3)
list.append(5)
list.reverse()
list.print()
