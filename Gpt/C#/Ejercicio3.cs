using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

public class Solution {
    public int KthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode current = root;
        int count = 0;
        
        while (current != null || stack.Count > 0) {
            while (current != null) {
                stack.Push(current);
                current = current.left;
            }
            
            current = stack.Pop();
            count++;
            if (count == k) {
                return current.val;
            }
            
            current = current.right;
        }
        
        return -1; // Si el árbol no tiene k elementos
    }
}

class Program {
    static void Main(string[] args) {
        // Crear el árbol de búsqueda binaria de ejemplo
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.left.left.left = new TreeNode(1);

        int k = 3;

        // Crear una instancia de la solución y encontrar el k-ésimo elemento más pequeño
        Solution solution = new Solution();
        int result = solution.KthSmallest(root, k);

        Console.WriteLine("El " + k + "-ésimo elemento más pequeño es: " + result);
    }
}
