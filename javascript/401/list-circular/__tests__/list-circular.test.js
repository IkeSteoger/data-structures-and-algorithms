'use strict';

const { isCircular } = require('../index');
const { LinkedList } = require('../../linked-list');

describe('Linked List', () => {

  test('Knows that list is not circular', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(isCircular(list)).toBeFalsy();
  });

  test('Knows list is circular', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.head.next.next.next = list.head;

    expect(isCircular(list)).toBeTruthy();
  });

});
