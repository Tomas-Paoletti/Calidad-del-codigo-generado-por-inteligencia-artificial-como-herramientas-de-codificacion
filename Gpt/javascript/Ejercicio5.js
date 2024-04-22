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

//primera iteracion es codigo incorrecto ya que no se utilizan los array aparte que output no es el correcto
/*class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    // Función auxiliar para fusionar dos listas enlazadas ordenadas
    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode(-1);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;

        return dummy.next;
    };

    // Función para fusionar k listas enlazadas ordenadas
    const merge = (lists, start, end) => {
        if (start === end) return lists[start];
        const mid = Math.floor((start + end) / 2);
        const left = merge(lists, start, mid);
        const right = merge(lists, mid + 1, end);
        return mergeTwoLists(left, right);
    };

    return merge(lists, 0, lists.length - 1);
}

// Ejemplos de uso
let lists1 = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];
console.log(mergeKLists(lists1)); // Output: ListNode { val: 1, next: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 4, next: ListNode { val: 5, next: ListNode { val: 6, next: null } } } } } } } }

let lists2 = [];
console.log(mergeKLists(lists2)); // Output: null

let lists3 = [[]];
console.log(mergeKLists(lists3)); // Output: null*/


//segunda iteracion es codigo correcto  

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return [];

    // Función auxiliar para fusionar dos listas enlazadas ordenadas
    const mergeTwoLists = (l1, l2) => {
        const merged = [];
        let i = 0;
        let j = 0;

        while (i < l1.length && j < l2.length) {
            if (l1[i] < l2[j]) {
                merged.push(l1[i]);
                i++;
            } else {
                merged.push(l2[j]);
                j++;
            }
        }

        while (i < l1.length) {
            merged.push(l1[i]);
            i++;
        }

        while (j < l2.length) {
            merged.push(l2[j]);
            j++;
        }

        return merged;
    };

    // Función para fusionar k listas enlazadas ordenadas
    const merge = (lists, start, end) => {
        if (start === end) return lists[start];
        const mid = Math.floor((start + end) / 2);
        const left = merge(lists, start, mid);
        const right = merge(lists, mid + 1, end);
        return mergeTwoLists(left, right);
    };

    return merge(lists, 0, lists.length - 1);
}

// Ejemplos de uso
let lists1 = [[1,4,5],[1,3,4],[2,6]];
console.log(mergeKLists(lists1)); // Output: [1,1,2,3,4,4,5,6]

let lists2 = [];
console.log(mergeKLists(lists2)); // Output: []

let lists3 = [[]];
console.log(mergeKLists(lists3)); // Output: []

