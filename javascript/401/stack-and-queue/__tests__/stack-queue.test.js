'use strict';

const { Stack, Queue } = require('../index');

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
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
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
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
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
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
    expect(stack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });

});

describe('Queue', () => {

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next).toBeNull();
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next).toBeNull();
    queue.dequeue();
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next).toBeNull();
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next).toBeNull();
    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next).toBeNull();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
  });

});
