---
title: "Singly Linked List - JavaScript Code Example"
description: "Explore Singly Linked Lists with concise code examples in JavaScript, mastering insertion, deletion, and search operations."
date: 2024-05-14
tags: [dsa, javascript]
---

## What is a Singly Linked List?

In the previous post, [Data Structure - Linked List](https://victoriacheng15.vercel.app/posts/data-structure-linked-list), we explored the general concepts of linked list and their structure.

Here, we dive into the singly linked list and its three operations:

- **Insertion** - add an element at the beginning and end
- **deletion** - remove an element at its index or value
- **Search** - find an element given its value

## Node Class

It represents a single node in the linked list with two properties: `value` to store the data and `next` to reference the next node in the list

```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
```

## Linked List Class

- `isEmpty`: Check if the linked list is empty or nor
- `getSize`: Get the current size of the linked list
- `print`: Display the linked list

```js
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	print() {
		if (this.isEmpty()) {
			return "the list is empty";
		}
		let curr = this.head;
		let ListValues = "";
		while (curr) {
			ListValues += `${curr.value} `;
			curr = curr.next;
		}
		return ListValues;
	}
}
```

### **Adding an Element at the Front (prepend)**

```js
prepend(value) {
 // Create a new node with the provided value
  const node = new Node(value);

  // Check if the linked list is empty
  if (this.isEmpty()) {
   // If empty, set the new node as the head node
    this.head = node;
  } else {
    // If not empty, set the next pointer of the new node to the current head
    node.next = this.head;
    // Update the head of the linked list to the new node
    this.head = node;
  }
  // Increase the size by 1
  this.size += 1;
}
```

### **Adding an Element at the Back (append)**

```js
append(value) {
// Create a new node with the provided value
  const node = new Node(value);

// Check if the linked list is empty
  if (this.isEmpty()) {
    // If empty, set the new node as the head node
    this.head = node;
  } else {
    // If not empty, traverse the list to find the last node
    let prev = this.head;
    // Traverse the nodes until the last node
    while (prev.next) {
      prev = prev.next;
    }
    // Set the next pointer of the last node to the new node
    prev.next = node;
  }
  // Increase the size by 1
  this.size += 1;
}
```

### Remove a Node Based On Index

```js
removeFrom(index) {
  // Check if the index is out of bounds
  if (index < 0 || index >= this.size) {
    return null;
  }

  let removedNode;
  // If index is 0, remove the first node
  if (index === 0) {
    // Store the first node as removedNode
    removedNode = this.head;
    // Update the head node to the next node
    this.head = this.head.next;
  } else {
    // If index is not 0, traverse the list to find the node beofre the index
    let prev = this.head;
    for (let i = 0; i < index - 1; i += 1) {
      prev = prev.next;
    }
    // Store the node as removedNode
    removedNode = prev.next;
    // Update the prev node's next pointer to removedNode's next node
    prev.next = removedNode.next;
  }
  // Increase the size by 1
  this.size -= 1;
  return removedNode.value;
}
```

### Search Based On the Value

```js
search(value) {
 // Check if the linked list is empty
 if (this.isEmpty()){
  // If empty, return -1
  return -1
 }
 // Set index to 0 and curr to the head node
 let index = 0
 let curr = this.head
 // Traverse through these nodes
 while(curr){
  // If the curr value is equal to the value, return the index
  if (curr.value === value) {
	  return index
	}
	// Update curr node to the next node
	curr = curr.next
	// Increase index by 1
	index++
  }
  // Return -1 if value is not found after traversed the list
 return -1
}
```

### Reverse the Order of the List

```js
reverse() {
  // Initialize prev node as null
  let prev = null;
  // Set current node as the head of the list
  let curr = this.head;
  // Traverse these nodes until current node becomes null
  while (curr) {
   // Store the next node in a temporary variable
    let { next } = curr; //  let next = curr.next;
    // Reverse the next pointer of the current node to point to the prev node
    curr.next = prev;
    // Update prev node to current node and current node to next node
    prev = curr;
    curr = next;
  }
  // Set the head to the last node
  this.head = prev;
}
```

## Full Code

Here is the full code for this post.

```js
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
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
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size += 1;
	}

	append(value) {
		const node = new Node(value);

		if (this.isEmpty()) {
			this.head = node;
		} else {
			let prev = this.head;
			while (prev.next) {
				prev = prev.next;
			}
			prev.next = node;
		}

		this.size += 1;
	}

	removeFrom(index) {
		if (index < 0 || index >= this.size) {
			return null;
		}

		let removedNode;
		if (index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let prev = this.head;
			for (let i = 0; i < index - 1; i += 1) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		this.size -= 1;
		return removedNode.value;
	}

	reverse() {
		let prev = null;
		let curr = this.head;
		while (curr) {
			let { next } = curr; //  let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		this.head = prev;
	}

	search(value) {
		if (this.isEmpty()) {
			return -1;
		}

		let index = 0;
		let curr = this.head;
		while (curr) {
			if (curr.value === value) {
				return index;
			}
			curr = curr.next;
			index++;
		}
		return -1;
	}

	print() {
		if (this.isEmpty()) {
			return "the list is empty";
		}
		let curr = this.head;
		let ListValues = "";
		while (curr) {
			ListValues += `${curr.value} `;
			curr = curr.next;
		}
		return ListValues;
	}
}
```

## Resources

I appreicate the way Codevolution, a Youtuber, explains the process of coding a JavaScript implementation for a Linked List, with clear visuals. The playlist covers more linked list methods than this post mentioned, so I highly recommend exploring the _JavaScript Data Structures_ playlist to deepen your knowledge on data structures.

[JavaScript Data Structure 14 - Linked List Class](https://www.youtube.com/watch?v=Tggvw4QlA9U&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=13&pp=iAQB)

[JavaScript Data Structure 15 - Linked List Preend](https://www.youtube.com/watch?v=NAPQ0ua02CA&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=14&pp=iAQB)

[JavaScript Data Structure 17 - Linked List Append](https://www.youtube.com/watch?v=3e6Xfnr5ME8&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=16&pp=iAQB)

[JavaScript Data Structure 19 - Linked List Remove](https://www.youtube.com/watch?v=D_kWagEfcx8&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=18&pp=iAQB)

[JavaScript Data Structure 21 - Linked List Search](https://www.youtube.com/watch?v=ZRIJuAIGJ4M&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=20&t=259s&pp=iAQB)

[JavaScript Data Structure 22 - Linked List Reverse](https://www.youtube.com/watch?v=S9kMVEUg-x4&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=21&pp=iAQB)

## Thank you!

Thank you for your time and for reading this!
