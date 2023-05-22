# Linked List

CHALLENGE 04: Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. Create a Linked List class. Now implement!

CHALLENGE 06: Create append, insert before, and insert after functions for Linked List.

## Whiteboard Process

![Whiteboard](./whiteboard06.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took was to be similar to the Traversal function we build in class demo. I reworked some of the code, once to check for any matching nodes and once to convert nodes into string.

ADDED FOR CHALLENGE 06: I used the base traversal function to get started for the append, then tried to alter it to work well with insert before/after. Ultimately I felt very confused but had Josh Coffey talk me through it which made it clear - I needed to do a lot of node hopping!

## Solution
<!-- Show how to run your code, and examples of it in action -->
Our code uses several methods to work with the Linked List that was created. The linked list class connects several nodes together and the nodes hold values. The functions  created were `insert(value)` which adds another node & switches the head to that node. There is a similar function `append(value)` that will add another node to the end of the Linked List but NOT swap the head to the new node. We have another function called `includes(value)` that will seek for any nodes that include the value fed to the function. Finally we have a `toString()` function that will read out all nodes in a `"{ a } -> { b } -> { c } -> NULL"` format for human readability.

ADDED FOR CHALLENGE 06: Functions `insertBefore` and `insertAfter` do as the label on the can says - you input an pointer position & a value and then it will insert it to the appropriate node.
