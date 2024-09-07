class EmirsStack {
    constructor(p) {
        if(p) this.stack = p;
        else this.stack = [];
    }

    static beles(){
        return 'wow';
    }

    push(val){
        this.stack.push(val);
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    length() {
        return this.stack.length;
    }
}

const s = new EmirsStack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.top());
console.log(EmirsStack.beles());
console.log(s.length());