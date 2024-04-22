/*Mediana Continua: Los números son generados aleatoriamente y pasados a un método. Escribe un programa para encontrar y mantener el valor de la mediana a medida 
que se generan nuevos valores en js
*/
//primera iteracion en copilot incorrecta ya que no son valores aleaotorios y se usa una libreria externa
/*
const PriorityQueue = require('priorityqueuejs');

class MedianFinder {
  constructor() {
    this.maxHeap = new PriorityQueue((a, b) => b - a); // Lower half
    this.minHeap = new PriorityQueue((a, b) => a - b); // Higher half
  }

  addNum(num) {
    this.maxHeap.enq(num);
    this.minHeap.enq(this.maxHeap.deq());
    if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.enq(this.minHeap.deq());
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    } else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }
  }
}

let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); 
mf.addNum(3);
console.log(mf.findMedian());  */
//segunda iteracion en copilot es correcta
class MedianFinder {
    constructor() {
        this.nums = [];
    }

    addNum(num) {
        if (!this.nums.length) {
            this.nums.push(num);
        } else {
            let left = 0, right = this.nums.length;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (this.nums[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            this.nums.splice(left, 0, num);
        }
    }

    findMedian() {
        let len = this.nums.length;
        if (len % 2 === 0) {
            return (this.nums[len / 2 - 1] + this.nums[len / 2]) / 2;
        } else {
            return this.nums[Math.floor(len / 2)];
        }
    }
}

let mf = new MedianFinder();
for (let i = 0; i < 10; i++) {
    let m =Math.floor(Math.random() * 100)
    console.log(m)
    mf.addNum(m);
    console.log(`After adding ${i + 1} number(s), the median is ${mf.findMedian()}`);
}