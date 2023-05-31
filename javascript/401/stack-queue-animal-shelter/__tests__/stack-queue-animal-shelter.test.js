'use strict';

const { AnimalShelter } = require('../index');

describe('AnimalShelter', () => {

  test('Can successfully enqueue into a queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('bob', 'dog');
    expect(animalShelter.front.name).toEqual('bob');
    expect(animalShelter.front.next).toBeNull();
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('bob', 'dog');
    expect(animalShelter.front.name).toEqual('bob');
    expect(animalShelter.front.next).toBeNull();
    animalShelter.enqueue('garfield', 'cat');
    animalShelter.enqueue('sunny', 'cat');
    expect(animalShelter.front.name).toEqual('bob');
    expect(animalShelter.front.next.name).toEqual('garfield');
    expect(animalShelter.front.next.next.name).toEqual('sunny');
    expect(animalShelter.front.next.next.next).toBeNull();
  });

  // test('Can successfully dequeue out of a queue the expected value', () => {
  //   let animalShelter = new AnimalShelter();
  //   animalShelter.enqueue('bob', 'dog');
  //   animalShelter.enqueue('garfield', 'cat');
  //   expect(animalShelter.front.name).toEqual('bob');
  //   expect(animalShelter.front.next.name).toEqual('garfield');
  //   expect(animalShelter.front.next.next).toBeNull();
  //   animalShelter.dequeue('cat');
  //   expect(animalShelter.front.name).toEqual('bob');
  //   expect(animalShelter.front.next).toBeNull();
  // });

  // test('Can successfully empty a queue after multiple dequeues', () => {
  //   let animalShelter = new AnimalShelter();
  //   animalShelter.enqueue('bob', 'dog');
  //   animalShelter.enqueue('garfield', 'cat');
  //   expect(animalShelter.front.name).toEqual('bob');
  //   expect(animalShelter.front.next.name).toEqual('garfield');
  //   expect(animalShelter.front.next.next).toBeNull();
  //   animalShelter.dequeue('cat');
  //   expect(animalShelter.front.name).toEqual('bob');
  //   expect(animalShelter.front.next).toBeNull();
  // });

  test('Can successfully instantiate an empty queue', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.front).toBeNull();
    expect(animalShelter.isEmpty()).toBeTruthy();
  });

});
