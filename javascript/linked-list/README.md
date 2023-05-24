# Linked List

CHALLENGE 04: Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next Node. Create a `Linked List` class. Now implement methods!

CHALLENGE 06: Create `append`, `insert before`, and `insert after` methods for Linked List.

CHALLENGE 07: Create `kthFromTheEnd` method that works with Linked List.

CHALLENGE 08: Create `zipLists` function that works with Linked List.

## Whiteboard Process

No whiteboard was requested for Challenge 04.
![Whiteboard06](./whiteboard06.png)
![Whiteboard07](./whiteboard07.png)
![Whiteboard08](./whiteboard08.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took was to be similar to the Traversal function we build in class demo. I reworked some of the code, once to check for any matching nodes and once to convert nodes into string.

ADDED FOR CHALLENGE 06: I used the base traversal function to get started for the append, then tried to alter it to work well with insert before/after. Ultimately I felt very confused but had Josh Coffey talk me through it which made it clear - I needed to do a lot of node hopping!

ADDED FOR CHALLENGE 07: Heather and I used the base traversal function but then added some nested loops to check for special cases & properly alter node position for each variable. Ultimately this was very complex and I'm not entirely sure we got all edge cases handled.

ADDED FOR CHALLENGE 08: Tricia and I created a function outside of the classes that would take in two seperate lists and then zipper them together. I was a bit stumped on this but Tricia had a genius idea to continuely iterate through each list node by node, reassigning them as the loop continues through & then would stop after we hit the NULL.

## Solution
<!-- Show how to run your code, and examples of it in action -->

[Link to Code](./index.js)

Our code uses several methods to work with the Linked List that was created. The linked list class connects several nodes together and the nodes hold values. The methods  created were `insert(value)` which adds another node & switches the head to that node. There is a similar method `append(value)` that will add another node to the end of the Linked List but NOT swap the head to the new node. We have another method called `includes(value)` that will seek for any nodes that include the value fed to the function. Finally we have a `toString()` method that will read out all nodes in a `"{ a } -> { b } -> { c } -> NULL"` format for human readability.

ADDED FOR CHALLENGE 06: LinkedList class methods `insertBefore(x,y)` and `insertAfter(x,y)` do as the label on the can says - you input an pointer position (x) & a value (y) and then it will insert it to the appropriate node.

ADDED FOR CHALLENGE 07: LinkedList class methods `kthFromEnd(x)` was added, which will intake x argument number and the find the node that is x nodes from the end of the linked list. This won't work if the argument number is too high & returns null. It doesn't work when you do negative either - it just returns the lowest position.

ADDED FOR CHALLENGE 08: A function `zipLists(list1, list2)` was added, which will intake two lists of any length & zipper them together. This means it will add one node from each list alternating. This will work even if one list is empty or even if one list is longer or shorter than the other.
