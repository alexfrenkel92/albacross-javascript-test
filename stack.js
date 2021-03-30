"use strict";

class Stack {
  constructor(...initialValues) {
    this.data = initialValues;
    this.size = initialValues.length;
  }

  push(element) {
    this.data.push(element);
    this.size++;
  }
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  pop() {
    if (this.size !== 0) {
      this.size--;
      return this.data.pop();
    } else {
      return null;
    }
  }
  peek() {
    console.log(this.data[this.size - 1]);
    return this.data[this.size - 1];
  }
  swap() {
    let poppedElements = [];
    let reducedSize = 0;
    for (let i = 0; i < 2; i++) {
      poppedElements.push(this.data.pop());
      this.size--;
      reducedSize++;
    }
    this.data.push(...poppedElements);
    this.size = this.size + reducedSize;
  }
}

let stack = new Stack(1, 2, 3);

console.log(stack);
stack.swap();
stack.peek();
console.log(stack);

module.exports = Stack;
