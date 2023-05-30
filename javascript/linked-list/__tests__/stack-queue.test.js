'use strict';

const { Stack, peek } = require('../index');

describe('Stack', () => {

  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next).toEqual(1);
    expect(stack.top.next.next).toBeNull();
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toEqual(2);
    expect(stack.top.next.next).toBeNull();
    stack.pop();
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toEqual(2);
    expect(stack.top.next.next).toBeNull();
    stack.pop();
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    stack.pop();
    expect(stack.top).toBeNull();
  });

  test('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toEqual(2);
    expect(stack.top.next.next).toBeNull();
    expect(peek(stack)).toEqual(2);
  });

});

// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception
