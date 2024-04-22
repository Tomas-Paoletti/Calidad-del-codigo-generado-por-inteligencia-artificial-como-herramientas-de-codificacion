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
//     public ListNode(int val=0, ListNode next=null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// public class Solution {
//     public ListNode MergeKLists(ListNode[] lists) {
//         SortedSet<(int val, int index, ListNode node)> set = new SortedSet<(int val, int index, ListNode node)>();
//         for (int i = 0; i < lists.Length; i++) {
//             if (lists[i] != null) {
//                 set.Add((lists[i].val, i, lists[i]));
//                 lists[i] = lists[i].next;
//             }
//         }
//         ListNode dummy = new ListNode(0);
//         ListNode current = dummy;
//         while (set.Count > 0) {
//             var min = set.Min;
//             set.Remove(min);
//             current.next = new ListNode(min.val);
//             current = current.next;
//             if (lists[min.index] != null) {
//                 set.Add((lists[min.index].val, min.index, lists[min.index]));
//                 lists[min.index] = lists[min.index].next;
//             }
//         }
//         return dummy.next;
//     }
// }

// public class Program {
//     public static void Main() {
//         Solution solution = new Solution();

//         ListNode[] lists = new ListNode[] {
//             new ListNode(1, new ListNode(4, new ListNode(5))),
//             new ListNode(1, new ListNode(3, new ListNode(4))),
//             new ListNode(2, new ListNode(6))
//         };
//         ListNode result = solution.MergeKLists(lists);
//         while (result != null) {
//             Console.Write(result.val + " ");
//             result = result.next;
//         }
//         Console.WriteLine();

//         lists = new ListNode[] {};
//         result = solution.MergeKLists(lists);
//         while (result != null) {
//             Console.Write(result.val + " ");
//             result = result.next;
//         }
//         Console.WriteLine();

//         lists = new ListNode[] { null };
//         result = solution.MergeKLists(lists);
//         while (result != null) {
//             Console.Write(result.val + " ");
//             result = result.next;
//         }
//         Console.WriteLine();
//     }
// }

//segunda iteracion con copilot el codigo es correcto
using System;
using System.Collections.Generic;

public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        SortedSet<(int val, int index, ListNode node)> set = new SortedSet<(int val, int index, ListNode node)>();
        for (int i = 0; i < lists.Length; i++) {
            if (lists[i] != null) {
                set.Add((lists[i].val, i, lists[i]));
                lists[i] = lists[i].next;
            }
        }
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        while (set.Count > 0) {
            var min = set.Min;
            set.Remove(min);
            current.next = new ListNode(min.val);
            current = current.next;
            if (lists[min.index] != null) {
                set.Add((lists[min.index].val, min.index, lists[min.index]));
                lists[min.index] = lists[min.index].next;
            }
        }
        return dummy.next;
    }

    public ListNode ArrayToList(int[] nums) {
        ListNode dummy = new ListNode(0);
        ListNode node = dummy;
        foreach (int num in nums) {
            node.next = new ListNode(num);
            node = node.next;
        }
        return dummy.next;
    }
}

public class Program {
    public static void Main() {
        Solution solution = new Solution();

        int[][] arrays = new int[][] {
            new int[] {1, 4, 5},
            new int[] {1, 3, 4},
            new int[] {2, 6}
        };
        ListNode[] lists = new ListNode[arrays.Length];
        for (int i = 0; i < arrays.Length; i++) {
            lists[i] = solution.ArrayToList(arrays[i]);
        }
        ListNode result = solution.MergeKLists(lists);
        while (result != null) {
            Console.Write(result.val + " ");
            result = result.next;
        }
        Console.WriteLine();

        arrays = new int[][] {};
        lists = new ListNode[arrays.Length];
        for (int i = 0; i < arrays.Length; i++) {
            lists[i] = solution.ArrayToList(arrays[i]);
        }
        result = solution.MergeKLists(lists);
        while (result != null) {
            Console.Write(result.val + " ");
            result = result.next;
        }
        Console.WriteLine();

        arrays = new int[][] { new int[] {} };
        lists = new ListNode[arrays.Length];
        for (int i = 0; i < arrays.Length; i++) {
            lists[i] = solution.ArrayToList(arrays[i]);
        }
        result = solution.MergeKLists(lists);
        while (result != null) {
            Console.Write(result.val + " ");
            result = result.next;
        }
        Console.WriteLine();
    }
}