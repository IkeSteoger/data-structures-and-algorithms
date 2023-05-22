'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
    expect(list.head.next.next.next).toBeNull();
  });

  test('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('b')).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('g')).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
    list.append('l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { l } -> NULL');
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertBefore('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { l } -> { c } -> { d } -> NULL');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('c', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { l } -> { d } -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert('d');
    list.insert('c');
    list.insert('b');
    list.insert('a');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    list.insertAfter('d', 'l');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { l } -> NULL');
  });
});
