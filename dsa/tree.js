

class Node {
    constructor(data ){
        this.data = data ;
        this.left = null;
        this.right = null;
    }
}

class BinearySearchTree {
    constructor(){
        this.root = null 
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
         this.insertNode(this.root , newNode)
        }
    }
    insertNode(root , node){
        if(node.data < root.data){
            if(root.left == null){
                root.left = node
            }
            else{
             this.insertNode(root.left , node)
            }
        }
        else{
            if(root.right === null){
                root.right = node
            }
            else{
              this.insertNode(root.right , node)
            }
        }

    }
    search(root ,value){
        if(root === null){
            return false
        }
        else{
            if(root.data === value){
                return true
            }
           else if( value > root.data ){

             return  this.search(root.right , value)
           }
           else{

            return  this.search(root.left , value)
           }
        }
     
    }
    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const node = queue.shift()
            console.log(node.data)
            if(node.left) queue.push(node.left)
            if(node.right)queue.push(node.right)
        }

    }
    min(root){
        if(!root.left){
            return root.data
        }
       else{
        return this.min(root.left)
       }
    }
    max(root){
        if(!root.right){
            return root.data
        }
       else{
        return this.max(root.right)
       }
    }
    delete(value){
        this.root = this.deleteNode(this.root , value)
    }
    deleteNode(root , value){
        if(root === null){
            return root 
        }
        if(value < root.data){
            root.left = this.deleteNode(root.left , value)
        }
        else if(value > root.data){
            root.right = this.deleteNode(root.right , value)
        }
        else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if (!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , value)

        }
        return root 
    }
    heightOfTree(root){
        if(root === null){
        return 0
        }
        let left = this.heightOfTree(root.left)
        let right = this.heightOfTree(root.right)
        let ans = Math.max(left , right) +1
        return ans 
    }
}

const tree = new BinearySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(11)
tree.insert(12)
tree.insert(4)


console.log(tree.root)
 let ans =""
 console.log(tree.search(tree.root , 11))
// tree.delete(10)
 tree.levelOrder()
console.log(tree.heightOfTree(tree.root))
