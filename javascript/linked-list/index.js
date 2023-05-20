'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  // traversal(){
  //   let current = this.head;
  //   while(current){
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }

  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString(){
    let current = this.head;
    let string = `{ ${ current.value } }`;
    current = current.next;
    while(current){
      string = `${string} -> { ${current.value} }`;
      current = current.next;
    }
    if (current === null) {
      string = `${string} -> NULL`;
    }
    return string;
  }
}



module.exports = LinkedList;
