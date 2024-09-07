class SingleNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class DoubleNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(data) {
        const newNode = new DoubleNode(data, this.head, null)
        if(this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    insertLast(data) {
        const newNode = new DoubleNode(data, null, this.tail);
        if(this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    insertAt(data, index) {
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        if(index === this.size) {
            this.insertLast(data);
            return;
        }
        if(index > this.size) {
            return;
        }

        let curr = this.head;
        let prev = null;
        let count = 0;
        while(curr && count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        const newNode = new DoubleNode(data);
        prev.next = newNode;
        curr.prev = newNode;
        newNode.next = curr;
        newNode.prev = prev;
        this.size++;
        return;
    }
    get(index) {
        if(index === 0 && this.head) {
            return this.head.data;
        }
        if(index === this.size && this.tail) {
            return this.tail.data;
        }
        if(index > this.size) {
            return null;
        }
        let curr = this.head;
        let count = 0;
        while(curr && count < index) {
            curr = curr.next;
            count++;
        }
        console.log(curr.data);
        return curr.data;
    }
    removeAtIndex(index) {
        if (index === 0) {
            this.head = this.head.next; // Move head to the next node
            if (!this.head) {
                this.tail = null; // List is now empty, so set tail to null
            } else {
                this.head.prev = null; // Update the new head's prev pointer to null
            }
            this.size--;
            return;
        }

        // Case 2: Removing the tail node
        if (index === this.size - 1) {
            this.tail = this.tail.prev; // Move tail to the previous node
            if (!this.tail) {
                this.head = null; // If the list is now empty, set head to null
            } else {
                this.tail.next = null; // Update the new tail's next pointer to null
            }
            this.size--;
            return;
        }
        let curr = this.head;
        let prev = null;
        let count = 0;
        while(curr && count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        if (prev) {
            prev.next = curr.next; // Update the next pointer of the node before curr
        }
        if (curr.next) {
            curr.next.prev = prev; // Update the prev pointer of the node after curr
        }
        this.size--;
    }
    remove(data) {
        if(this.head.data === data) {
            this.head = this.head.next;
            if(!this.head) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        if(this.tail.data === data) {
            this.tail = this.tail.prev;
            if(!this.tail) {
                this.head = null;
            } else {
                this.tail.next = null;
            }
            this.size--;
            return;
        }
        let curr = this.head;

        while(curr && curr.data !== data) {
            curr = curr.next;
        }
        if(!curr) {
            return; // not found
        }
        if(curr.prev){
            curr.prev.next = curr.next;
        }
        if(curr.next) {
            curr.next.prev = curr.prev;
        }
        this.size--;

    }

    printForward() {
        let curr = this.head;
        let s = "";
        while(curr) {
            s += curr.data + " <-> ";
            curr = curr.next;
        }
        console.log(s.slice(0, -5));
    }
    printBackward() {
        let curr = this.tail;
        let s = "";
        while(curr) {
            s += curr.data + " <-> ";
            curr = curr.prev;
        }
        console.log(s.slice(0, -5));
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(data) {
        const newNode = new SingleNode(data, this.head);
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }
    insertLast(data) {
        const newNode = new SingleNode(data, null);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    insertAt(data, index) {
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        if(index === this.size) {
            this.insertLast(data);
            return;
        }
        if(index > this.size) {
            return;
        }
        let curr = this.head;
        let prev = null;
        let count = 0;
        while(curr && count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        const newNode = new SingleNode(data);
        prev.next = newNode;
        newNode.next = curr;
        this.size++;
    }
    remove(data){
        if(this.head.data === data) {
            this.head = this.head.next;
            if(this.head === null) {
                this.tail = null;
            }
            this.size--;
            return;
        }

        let curr = this.head;
        let prev = null;

        while(curr && curr.data !== data) {
            prev = curr;
            curr = curr.next;
        }
        if(!curr) {
            return; // not found
        }
        prev.next = curr.next;
        this.size--;
        if(curr === this.tail) {
            this.tail = prev;
        }
    }

    print() {
        let curr = this.head;  // Start from the head, not head.next
        let s = "";
        while (curr != null) {
            s += curr.data + " -> ";  // Use curr.data instead of curr.val
            curr = curr.next;
        }
        console.log(s.slice(0, -4));  // Remove the trailing ' -> '
    }

}


const s = new SinglyLinkedList();
s.insertFirst(1);
s.insertFirst(2);
s.insertFirst(3);
s.insertFirst(4);

s.print();
s.remove(3);
s.print();
s.insertAt(7,0);
s.print();

console.log('------------------')

const d = new DoublyLinkedList();
d.insertFirst(1);
d.insertLast(2);
d.insertFirst(3);
d.insertLast(4);
d.printForward();
d.remove(3);
d.printForward();
d.printBackward();
d.insertAt(7,2);
d.printForward();
d.printBackward();
d.get(2);
d.removeAtIndex(3);
d.printForward();
