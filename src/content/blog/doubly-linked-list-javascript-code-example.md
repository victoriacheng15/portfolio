---
title: "Doubly Linked List - JavaScript Code Example"
description: "Doubly linked lists facilitate bidirectional traversal, offering insertion, deletion, and search operations with nodes linking forward and backward."
date: 2024-06-04
tags: [dsa, javascript]
---

## What is a Doubly Linked List?

In the previous post, [Singly Linked List: Practial Code Example](https://victoriacheng15.vercel.app/posts/singly-linked-list-practical-code-example), we delved into the singly linked lists and provided a practical code example to illustrate their implementation. In this post, we turn our attention to doubly linked list. While doubly linked lists share many similarities with singly linked lists, they offer additional functionality and flexibility by allowing traversal in both directions. However, this added functionality comes at the cost of increased memory usage, as each node must store an extra refnerence to the previous node.

Doubly linked lists support the same core operations as singly linked lists:

- **Insertion** - add an element at the beginning and end
- **deletion** - remove an element at its index or value
- **Search** - find an element given its value

## Node Class

The `node` class represents a single element in a doubly linked list. Each node contains three properties:

- **value** - store the data for the node
- **next** - a reference to the next node
- **prev** - a reference to the previous node

```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
```

## Doubly Linked List Class

Since the doubly linked list is very similar to the singly linked list, we will not cover certain operations, such as searching, reversing the order of the list, and printing the list, in this code example. Instead, we will focus on the primary operations: adding a new element to the front or back of the list, and removing an element from the front or back.

- `isEmpty` - checking the list is empty or not
- `getSize` - tracking the current size

```js
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}
}
```

### Adding an Element at the Front (prepend):

```js
  prepend(value) {
    // Create a new node with provided value
    const node = new Node(value);
		// Check if the list is empty
    if (this.isEmpty()) {
	    // If empty, set the new node as the head node
      this.head = node;
      this.tail = node;
    } else {
	    // If not empty, update the current head's previous node to the new node
      this.head.prev = node;
      // Set the new node's next to the current head
      node.next = this.head;
      // Update the head to the new node
      this.head = node;
    }

    this.size += 1;
  }

```

### Adding an Element at the Back (append):

```js
  append(value) {
	  // Create a new node with the provided value
    const node = new Node(value);
		// Check if the list is empty
    if (this.isEmpty()) {
	    // If empty, set the new node as the head and tail
      this.head = node;
      this.tail = node;
    } else {
	    // If not empty, update the current tail's next node to the new node
      this.tail.next = node;
      // Set the new node's previous to the current tail
      node.prev = this.tail;
      // Update the tail to be the new node
      this.tail = node;
    }

    this.size += 1;
  }
```

### Remove a Node From the Front:

```js
  removeFromFront() {
	  // Check if the list is empty
    if (this.isEmpty()) {
      return null;
    }

		// Store the value of the current head node
    const { value } = this.head; // const value = this.head.value;

    // If the list has only one node
    if (this.size === 1) {
	    // Set head and tail to null
      this.head = null;
      this.tail = null;
    } else {
	    // Set the head to the next node
      this.head = this.head.next;
      // Remove the reference to the previous head node
      this.head.prev = null;
    }

    this.size -= 1;
    return value;
  }
```

### Remove a Node From the End:

```js
  removeFromEnd() {
	  // Check if the list is empty
    if (this.isEmpty()) {
      return null;
    }

		// Store the value of the current tail node
    const { value } = this.tail; // const value = this.tail.value;

    // If the list has only one node
    if (this.size === 1) {
	    // Set head and tail to null
      this.head = null;
      this.tail = null;
    } else {
	    // Set the tail to the previous node
      this.tail = this.tail.prev;
      // Remove the reference to the old tail node
      this.tail.next = null;
    }

    this.size -= 1;

    return value;
  }

```

## Full Code

Here is the full code for this post.

```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);

		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}

		this.size += 1;
	}

	append(value) {
		const node = new Node(value);

		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.size += 1;
	}

	removeFromFront() {
		if (this.isEmpty()) {
			return null;
		}

		const { value } = this.head; // const value = this.head.value;
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
		}

		this.size -= 1;
		return value;
	}

	removeFromEnd() {
		if (this.isEmpty()) {
			return null;
		}

		const { value } = this.tail; // const value = this.tail.value;
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}

		this.size -= 1;
		return value;
	}
}
```

## Resources

[JavaScript Data Structures - 27 - Doubly Linked List](https://www.youtube.com/watch?v=MZhQB8R33xw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=27)

## Thank you!

Thank you for your time and for reading this!
