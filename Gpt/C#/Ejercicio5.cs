//Se te proporciona una lista lists que contiene k listas enlazadas ordenadas de forma ascendente. 
//Combina todas las listas enlazadas en una sola lista enlazada ordenada y devuélvela.
/*
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []*/ 

//primera iteracion el error es que lo hace con lisnode no con arrays
// using System;
// using System.Collections.Generic;

// public class ListNode {
//     public int val;
//     public ListNode next;
//     public ListNode(int val = 0, ListNode next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// public class Solution {
//     public ListNode MergeKLists(ListNode[] lists) {
//         if (lists == null || lists.Length == 0) {
//             return null;
//         }
        
//         return MergeLists(lists, 0, lists.Length - 1);
//     }
    
//     private ListNode MergeLists(ListNode[] lists, int left, int right) {
//         if (left == right) {
//             return lists[left];
//         }
        
//         int mid = left + (right - left) / 2;
//         ListNode leftList = MergeLists(lists, left, mid);
//         ListNode rightList = MergeLists(lists, mid + 1, right);
//         return MergeTwoLists(leftList, rightList);
//     }
    
//     private ListNode MergeTwoLists(ListNode l1, ListNode l2) {
//         ListNode dummy = new ListNode();
//         ListNode current = dummy;
        
//         while (l1 != null && l2 != null) {
//             if (l1.val < l2.val) {
//                 current.next = l1;
//                 l1 = l1.next;
//             } else {
//                 current.next = l2;
//                 l2 = l2.next;
//             }
//             current = current.next;
//         }
        
//         if (l1 != null) {
//             current.next = l1;
//         }
        
//         if (l2 != null) {
//             current.next = l2;
//         }
        
//         return dummy.next;
//     }
// }

// class Program {
//     static void Main(string[] args) {
//         Solution solution = new Solution();

//         // Example 1
//         ListNode[] lists1 = {
//             new ListNode(1) {
//                 next = new ListNode(4) {
//                     next = new ListNode(5)
//                 }
//             },
//             new ListNode(1) {
//                 next = new ListNode(3) {
//                     next = new ListNode(4)
//                 }
//             },
//             new ListNode(2) {
//                 next = new ListNode(6)
//             }
//         };
//         PrintList("Example 1:", solution.MergeKLists(lists1));

//         // Example 2
//         ListNode[] lists2 = {};
//         PrintList("Example 2:", solution.MergeKLists(lists2));

//         // Example 3
//         ListNode[] lists3 = { new ListNode() };
//         PrintList("Example 3:", solution.MergeKLists(lists3));
//     }

//     static void PrintList(string label, ListNode head) {
//         Console.Write(label + " ");
//         while (head != null) {
//             Console.Write(head.val + " ");
//             head = head.next;
//         }
//         Console.WriteLine();
//     }
// }

//segunda iteracion
using System;
using System.Collections.Generic;

public class Solution {
    public int[] MergeKLists(int[][] lists) {
        if (lists == null || lists.Length == 0) {
            return new int[0];
        }
        
        return MergeLists(lists, 0, lists.Length - 1);
    }
    
    private int[] MergeLists(int[][] lists, int left, int right) {
        if (left == right) {
            return lists[left];
        }
        
        int mid = left + (right - left) / 2;
        int[] leftList = MergeLists(lists, left, mid);
        int[] rightList = MergeLists(lists, mid + 1, right);
        return MergeTwoArrays(leftList, rightList);
    }
    
    private int[] MergeTwoArrays(int[] arr1, int[] arr2) {
        List<int> merged = new List<int>();
        int i = 0, j = 0;
        
        while (i < arr1.Length && j < arr2.Length) {
            if (arr1[i] < arr2[j]) {
                merged.Add(arr1[i++]);
            } else {
                merged.Add(arr2[j++]);
            }
        }
        
        while (i < arr1.Length) {
            merged.Add(arr1[i++]);
        }
        
        while (j < arr2.Length) {
            merged.Add(arr2[j++]);
        }
        
        return merged.ToArray();
    }
}

class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();

        // Example 1
        int[][] lists1 = {
            new int[] {1, 4, 5},
            new int[] {1, 3, 4},
            new int[] {2, 6}
        };
        PrintArray("Example 1:", solution.MergeKLists(lists1));

        // Example 2
        int[][] lists2 = {};
        PrintArray("Example 2:", solution.MergeKLists(lists2));

        // Example 3
        int[][] lists3 = { new int[] {} };
        PrintArray("Example 3:", solution.MergeKLists(lists3));
    }

    static void PrintArray(string label, int[] arr) {
        Console.Write(label + " ");
        Console.Write("[");
        foreach (var num in arr) {
            Console.Write(num + " ");
        }
        Console.WriteLine("]");
    }
}
