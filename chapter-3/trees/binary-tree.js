const BinaryNode = require('./binary-node.js').BinaryNode;

function BinaryTree(){
    this.root = null;
}

BinaryTree.prototype.add = function(binaryNode, root){
    
    if(!root && !this.root){
        this.root = binaryNode;
        return;
    }else if(!root){
        root = this.root;
    }

    if(binaryNode.value > root.value){
        if(root.right){
            this.add(binaryNode, root.right);
        }else{
            root.right = binaryNode;
        }
    }else{
        if(root.left){
            this.add(binaryNode, root.left);
        }else{
            root.left = binaryNode;
        }
    }

}

BinaryTree.preOrder = function(root){
    if(!root) return;
    console.log(root.value + ' ');
    BinaryTree.preOrder(root.left);
    BinaryTree.preOrder(root.right);
}

BinaryTree.posOrder = function(root){
    if(!root) return;
    BinaryTree.preOrder(root.left);
    BinaryTree.preOrder(root.right);
    console.log(root.value + ' ');
}

BinaryTree.inOrder = function(root){
    if(!root) return;
    BinaryTree.preOrder(root.left);
    console.log(root.value + ' ');
    BinaryTree.preOrder(root.right);
}

var tree = new BinaryTree();
tree.add(new BinaryNode(5));
tree.add(new BinaryNode(10));
tree.add(new BinaryNode(7));
tree.add(new BinaryNode(11));
tree.add(new BinaryNode(3));
tree.add(new BinaryNode(4));
tree.add(new BinaryNode(1));
tree.add(new BinaryNode(2));

BinaryTree.preOrder(tree.root);
BinaryTree.posOrder(tree.root);
BinaryTree.inOrder(tree.root);

exports.BinaryTree = BinaryTree;