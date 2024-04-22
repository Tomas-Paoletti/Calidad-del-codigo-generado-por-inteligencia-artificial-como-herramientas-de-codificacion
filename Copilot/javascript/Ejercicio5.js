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
//primera iteracion  es codigo correcto en cuando a la respuesta pero no usa listas normales sino listas nodo que serian listas enlazadas pero en el ejercicios deberian pasarse por array
/*
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function mergeKLists(lists) {
  let dummy = new ListNode(0);
  let node = dummy;
  let queue = [];
  for (let list of lists) {
      if (list) {
          queue.push(list);
      }
  }
  queue.sort((a, b) => a.val - b.val);
  while (queue.length > 0) {
      node.next = queue.shift();
      node = node.next;
      if (node.next) {
          let idx = binarySearch(queue, node.next.val);
          queue.splice(idx, 0, node.next);
      }
  }
  return dummy.next;
}

function binarySearch(arr, x) {
  let left = 0, right = arr.length;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid].val < x) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return right;
}
let lists = [
  n1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6))
];
console.log(lists);
let result = mergeKLists(lists);
while (result) {
  console.log(result.val);
  result = result.next;
}*/
//2da iteracion
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function arrayToList(nums) {
  let dummy = new ListNode(0);
  let node = dummy;
  for (let num of nums) {
      node.next = new ListNode(num);
      node = node.next;
  }
  return dummy.next;
}

function mergeKLists(lists) {
  let dummy = new ListNode(0);
  let node = dummy;
  let queue = [];
  for (let list of lists) {
      let linkedList = arrayToList(list);
      if (linkedList) {
          queue.push(linkedList);
      }
  }
  queue.sort((a, b) => a.val - b.val);
  while (queue.length > 0) {
      node.next = queue.shift();
      node = node.next;
      if (node.next) {
          let idx = binarySearch(queue, node.next.val);
          queue.splice(idx, 0, node.next);
      }
  }
  return dummy.next;
}

function binarySearch(arr, x) {
  let left = 0, right = arr.length;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid].val < x) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return right;
}

let lists = [[1, 4, 5], [1, 3, 4], [2, 6]];
let result = mergeKLists(lists);
while (result) {
  console.log(result.val);
  result = result.next;
}