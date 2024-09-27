class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class Queue {
    constructor() {
        this.left = null;
        this.right = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);
        if(this.size === 0) {
            this.left = node;
            this.right = node;
        } else {
            this.right.next = node;
            this.right = node;
        }
        this.size++;

    }

    dequeue() {
        if(this.size === 0) {
            return null
        }
        const deletedValue = this.left.data;
        this.left = this.left.next;
        if(this.left === null) {
            this.right = null;
        }
        this.size--;

        return deletedValue;
    }

    shift() {
        if(this.size === 0) {
            return null
        }
        const deletedValue = this.left.data;
        this.left = this.left.next;
        if(this.left === null) {
            this.right = null;
        }
        this.size--;

        return deletedValue;
    }

    isEmpty() {
        return this.size === 0;
    }
    length() {
        return this.size;
    }

}