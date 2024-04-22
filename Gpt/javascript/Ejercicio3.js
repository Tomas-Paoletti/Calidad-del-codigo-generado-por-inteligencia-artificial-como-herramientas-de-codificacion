
//Encontrar el k-ésimo elemento más pequeño en un árbol binario de búsqueda
//Te brindan la raíz (root) de un árbol de búsqueda binaria y un entero k. Se te pide que devuelvas el valor k-esimo más pequeño (considerando una indexación que inicia en 1) 
//de todos los valores presentes en los nodos del árbol.
//Input: root = [5,3,6,2,4,null,null,1], k = 3
//Output: 3
/* Primer iteracion en gpt
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    constructor() {
        this.count = 0;
        this.result = -1;
    }

    kthSmallest(root, k) {
        this.inOrder(root, k);
        return this.result;
    }

    inOrder(node, k) {
        if (!node) return;
        
        this.inOrder(node.left, k);
        
        this.count++;
        if (this.count === k) {
            this.result = node.val;
            return;
        }
        
        this.inOrder(node.right, k);
    }
}

// Crear el árbol de búsqueda binaria de ejemplo
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

let k = 3;

// Crear una instancia de la solución y encontrar el k-ésimo elemento más pequeño
let solution = new Solution();
let result = solution.kthSmallest(root, k);

console.log(`El ${k}-ésimo elemento más pequeño es: ${result}`);
*/

// Segunda iteracion en gpt toma valores del  array null y contruye el arbol
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    constructor() {
        this.count = 0;
        this.result = -1;
    }

    kthSmallest(root, k) {
        this.inOrder(root, k);
        return this.result;
    }

    inOrder(node, k) {
        if (!node) return;
        
        this.inOrder(node.left, k);
        
        this.count++;
        if (this.count === k) {
            this.result = node.val;
            return;
        }
        
        this.inOrder(node.right, k);
    }
}

function buildBST(nums) {
    if (!nums.length) return null;
    
    let root = new TreeNode(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        insertNode(root, nums[i]);
    }
    return root;
}

function insertNode(root, val) {
    if (!root) return new TreeNode(val);
    
    if (val < root.val) {
        root.left = insertNode(root.left, val);
    } else {
        root.right = insertNode(root.right, val);
    }
    
    return root;
}

// Ejemplo de uso
let nums = [5,3,6,2,4,null,null,1];
let k = 3;
nums = nums.filter(num => num !== null);//elimina los valores null en la tercera iteracion

let root = buildBST(nums);
let solution = new Solution();
let result = solution.kthSmallest(root, k);

console.log(`El ${k}-ésimo elemento más pequeño es: ${result}`);
