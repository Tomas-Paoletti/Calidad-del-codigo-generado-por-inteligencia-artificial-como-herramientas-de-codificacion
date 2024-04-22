//Encontrar el k-ésimo elemento más pequeño en un árbol binario de búsqueda
//Te brindan la raíz (root) de un árbol de búsqueda binaria y un entero k. Se te pide que devuelvas el valor k-esimo más pequeño (considerando una indexación que inicia en 1) 
//de todos los valores presentes en los nodos del árbol.
//Input: root = [5,3,6,2,4,null,null,1], k = 3
//Output: 3
using System;
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}
public class Solution
{
    private static int number = 0;
    private static int count = 0;

    public static int KthSmallest(int[] arr, int k)
    {
        TreeNode root = SortedArrayToBST(arr, 0, arr.Length - 1);
        count = k;
        InOrder(root);
        return number;
    }

    private static TreeNode SortedArrayToBST(int[] arr, int start, int end)
    {
        if (start > end)
        {
            return null;
        }

        int mid = (start + end) / 2;
        TreeNode node = new TreeNode(arr[mid]);

        node.left = SortedArrayToBST(arr, start, mid - 1);
        node.right = SortedArrayToBST(arr, mid + 1, end);

        return node;
    }

    private static void InOrder(TreeNode root)
    {
        if (root == null) return;
        InOrder(root.left);
        if (--count == 0)
        {
            number = root.val;
            return;
        }
        InOrder(root.right);
    }
    public static void Main(string[] args)
    {
        Console.WriteLine("Ingrese el tamaño del arreglo");

        int[] arr = {1, 2, 3, 4, 5, 6};
     int k = 3;
     try{
     int result = Solution.KthSmallest(arr, k);
     Console.WriteLine(result);  // Output: 3
     }catch(Exception e){
         Console.WriteLine(e.Message);
     }
 
}
}
