class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return ((this.rear + 1) % this.size) === this.front;
    }

    enqueue(element) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const element = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue[this.front];
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.join(" "));
    }
}

// Example usage:
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.printQueue(); // 10 20 30
cq.dequeue();
cq.printQueue(); // 20 30