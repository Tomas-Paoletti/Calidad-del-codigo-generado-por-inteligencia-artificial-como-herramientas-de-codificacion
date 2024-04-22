/*Mediana Continua: Los números son generados aleatoriamente y pasados a un método. Escribe un programa para encontrar y mantener el valor de la mediana a medida 
que se generan nuevos valores en js*/
class PriorityQueue {
    constructor(comparator = (a, b) => a - b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.isEmpty() ? undefined : this._heap[0];
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();
    }

    pop() {
        if (this.isEmpty()) return undefined;
        if (this.size() === 1) return this._heap.pop();

        const root = this._heap[0];
        this._heap[0] = this._heap.pop();
        this._siftDown();
        return root;
    }

    _siftUp() {
        let nodeIndex = this.size() - 1;
        while (nodeIndex > 0) {
            const parentIndex = Math.floor((nodeIndex - 1) / 2);
            if (this._compareNodes(nodeIndex, parentIndex) < 0) {
                this._swap(nodeIndex, parentIndex);
                nodeIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    _siftDown() {
        let nodeIndex = 0;
        while (nodeIndex < this.size()) {
            const leftChildIndex = 2 * nodeIndex + 1;
            const rightChildIndex = 2 * nodeIndex + 2;
            let minIndex = nodeIndex;

            if (leftChildIndex < this.size() && this._compareNodes(leftChildIndex, minIndex) < 0) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.size() && this._compareNodes(rightChildIndex, minIndex) < 0) {
                minIndex = rightChildIndex;
            }

            if (minIndex !== nodeIndex) {
                this._swap(nodeIndex, minIndex);
                nodeIndex = minIndex;
            } else {
                break;
            }
        }
    }

    _compareNodes(index1, index2) {
        return this._comparator(this._heap[index1], this._heap[index2]);
    }

    _swap(index1, index2) {
        const temp = this._heap[index1];
        this._heap[index1] = this._heap[index2];
        this._heap[index2] = temp;
    }
}

class MedianFinder {
    constructor() {
        this.lowerHalf = new PriorityQueue((a, b) => b - a);
        this.upperHalf = new PriorityQueue();
    }

    addNum(num) {
        if (this.lowerHalf.isEmpty() || num <= this.lowerHalf.peek()) {
            this.lowerHalf.push(num);
        } else {
            this.upperHalf.push(num);
        }

        this.rebalance();
    }

    rebalance() {
        while (this.lowerHalf.size() - this.upperHalf.size() > 1) {
            this.upperHalf.push(this.lowerHalf.pop());
        }

        while (this.upperHalf.size() > this.lowerHalf.size()) {
            this.lowerHalf.push(this.upperHalf.pop());
        }
    }

    findMedian() {
        if (this.lowerHalf.isEmpty() && this.upperHalf.isEmpty()) return null;

        if (this.lowerHalf.size() === this.upperHalf.size()) {
            return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2;
        } else {
            return this.lowerHalf.peek();
        }
    }
}

// Ejemplo de uso
const medianFinder = new MedianFinder();
const numbers = [5, 2, 10, 8, 1, 6];

for (const num of numbers) {
    console.log(`Añadiendo el número ${num}...`);
    medianFinder.addNum(num);
    console.log(`Valor actual de la mediana: ${medianFinder.findMedian()}`);
}
