//Encontrar el k-ésimo elemento más pequeño en un árbol binario de búsqueda
//Te brindan la raíz (root) de un árbol de búsqueda binaria y un entero k. Se te pide que devuelvas el valor k-esimo más pequeño (considerando una indexación que inicia en 1) 
//de todos los valores presentes en los nodos del árbol.
//Input: root = [5,3,6,2,4,null,null,1], k = 3
//Output: 3
//En el primer iteracion no se enviaba el array sino que se agregaba el valor de a uno
/*class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
let count = 0;
let result = null;

function kthSmallest(root, k) {
    traverse(root, k);
    return result;
}

function traverse(node, k) {
    if (node === null || count >= k) {
        return;
    }
    traverse(node.left, k);
    count++;
    if (count === k) {
        result = node.val;
        return;
    }
    traverse(node.right, k);
}
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

let k = 3;
console.log(kthSmallest(root, k));  // Output: 3*/
//En la segunda iteracion se obtuvo el valor correcto
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sortedArrayToBST(nums, start = 0, end = nums.length - 1) {
    if (start > end) {
        return null;
    }
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums, start, mid - 1);
    node.right = sortedArrayToBST(nums, mid + 1, end);
    return node;
}

let count = 0;
let result = null;

function kthSmallest(root, k) {
    traverse(root, k);
    return result;
}

function traverse(node, k) {
    if (node === null || count >= k) {
        return;
    }
    traverse(node.left, k);
    count++;
    if (count === k) {
        result = node.val;
        return;
    }
    traverse(node.right, k);
}

let nums = [1, 2, 3, 4, 5, 6];
let root = sortedArrayToBST(nums);
let k = 3;
console.log(kthSmallest(root, k));  // Output: 3