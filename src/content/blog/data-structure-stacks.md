---
title: "Data Structure - Stacks"
description: "Discover the power of stacks in data structures—efficiency and versatility in handling Last In, First Out (LIFO) operations."
date: 2024-04-18
tags: [dsa]
---

## What is a Stack?

A stack is a fundamental data structure that adheres to the _Last In, First Out_ (LIFO) principle. In simple terms, elements can be added or removed only from the top of the stack.

Think of a stack of plates in a cafeteria; you can only add a new plate to the top or remove the top plate. This straightforward analogy illustrates the essence of a stack in computer science.

## How Does a Stack work

The stack data structure supports two main operation:

- **Push:** Adds an element to the top of the stack.
- **Pop:** Removes the top element from the stack.

![data-structure-stacks](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/bf56f7b0-3a79-4f10-9fff-eaa987318cc3)

### JavaScript

```js
class Stack {
	constructor() {
		this.items = [];
	}

	// Add a new element to the top of the stack
	push(element) {
		this.items.push(element);
	}

	// Remove the first elemet from the stack
	pop() {
		return this.items.pop();
	}

	// Get the value of the first element
	peek() {
		return this.items[this.items.length - 1];
	}

	// Check if the stack is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Get the number of elements in the stack
	size() {
		return this.items.length;
	}

	// Print all the elements in the stack
	print() {
		console.log(this.items);
	}
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log("Stack:");
stack.print(); // Output: [5, 10, 15]

console.log("Top element:", stack.peek()); // Output: 15

console.log("Pop:", stack.pop()); // Output: 15
console.log("Stack after pop:");
stack.print(); // Output: [5, 10]

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Size of stack:", stack.size()); // Output: 2
```

### Python

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        """Add an element to the top of the stack."""
        self.items.append(item)

    def pop(self):
        """Remove and return the top element from the stack."""
        if not self.is_empty():
            return self.items.pop()
        else:
            return None  # Or raise an exception for empty stack

    def peek(self):
        """Return the top element of the stack without removing it."""
        if not self.is_empty():
            return self.items[-1]
        else:
            return None  # Or raise an exception for empty stack

    def is_empty(self):
        """Check if the stack is empty."""
        return len(self.items) == 0

    def size(self):
        """Return the number of elements in the stack."""
        return len(self.items)

    def display(self):
        """Display the elements of the stack."""
        print(self.items)

# Example usage:
if __name__ == "__main__":
    stack = Stack()
    stack.push(5)
    stack.push(10)
    stack.push(15)

    print("Stack:")
    stack.display()  # Output: [5, 10, 15]

    print("Top element:", stack.peek())  # Output: 15

    print("Pop:", stack.pop())  # Output: 15
    print("Stack after pop:")
    stack.display()  # Output: [5, 10]

    print("Is stack empty?", stack.is_empty())  # Output: False

    print("Size of stack:", stack.size())  # Output: 2

```

## Thank you!

Thank you for your time and for reading this!
