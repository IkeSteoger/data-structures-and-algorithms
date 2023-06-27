'use strict';

const { HashTable } = require('../index');

describe('Hash Tables', () => {

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const table = new HashTable(1024);
    expect(table.size).toEqual(1024);
  });

  test('Retrieving based on a key returns the value stored', () => {
    const table = new HashTable(1024);
    table.set('Ike', 'this is my value');
    expect(table.get('Ike')).toEqual('this is my value');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('Ike', 'this is my value');
    expect(table.get('Kati')).toEqual(null);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('Ike', 'this is my value');
    table.set('Kati', 'how do we define value');
    let keys = table.keys();
    expect(keys).toEqual(['Ike', 'Kati']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    const table = new HashTable(1024);
    table.set('Ike', 'this is my value');
    table.set('Kei', 'how do we define value');
    expect(table.get('Kei')).toEqual('how do we define value');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new HashTable(1024);
    table.set('Ike', 'this is my value');
    table.set('Kei', 'how do we define value');
    expect(table.get('Kei')).toEqual('how do we define value');
  });

  test('Successfully hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    expect(table.hash('Ike')).toEqual(383);
  });

});


// const table = new HashTable(1024);

// console.log('table', table);

// let hashOne = table.hash('Ike');
// let hashTwo = table.hash('Kati');

// console.log(hashOne, hashTwo);

// table.set('Ike', 'this is my value');
// table.set('Kati', 'how do we define value');

// console.log('updated table', table);


// console.log('get Ike', table.get('Ike'));
// console.log('get Kati', table.get('Kati'));

// console.log('has Ike', table.has('Ike'));
// console.log('has Ryan', table.has('Ryan'));

// console.log('Keys', table.keys());
