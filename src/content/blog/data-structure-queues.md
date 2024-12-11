---
title: "Data Structure - Queues"
description: "Explore the essence of queues: understand FIFO principle, real-life analogies, and implement in JavaScript and Python. Elevate your data structure skills!"
date: 2024-04-24
tags: [dsa]
---

## What is a Queue?

A queue is a fundamental data structure that follows the _First In, First Out_ (FIFO) principle. In simpler terms, elements are added at the rear and removed from the front of the queue.

Imagine waiting in line at a grocery store checkout. The first person to arrive at the checkout counter is the first to be served, and as more customers join the line, they do so at the end. This scenario embodies the behavior of a queue in computer science.

## How Does a Queue Work?

The queue data structure supports two primary operations:

- **Enqueue:** Adds an element to the end of the queue.
- **Dequeue:** Removes the front element from the queue.

Similar to how people enter and exit a line, elements are added to the end of the queue and removed from the front, maintaining the order in which they were added.

![data-structure-queues](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/98c1ca34-3d76-4fab-9c2d-c7177d954c18)

### JavaScript

```js
class Queue {
	constructor() {
		this.items = [];
	}

	// Add a new element to the rear of the queue
	enqueue(element) {
		this.items.push(element);
	}

	// Remove and return the front element from the queue
	dequeue() {
		return this.items.shift();
	}

	// Get the value of the front element
	peek() {
		return this.items[0];
	}

	// Check if the queue is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Get the number of elements in the queue
	size() {
		return this.items.length;
	}

	// Print all the elements in the queue
	print() {
		console.log(this.items);
	}
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log("Queue:");
queue.print();
// Queue: [5, 10, 15]

console.log("Front element:", queue.peek());
// Front element: 5

console.log("Dequeue:", queue.dequeue());
// Dequeue: 5

console.log("Queue after dequeue:");
queue.print();
// Queue after dequeue: [10, 15]

console.log("Is queue empty?", queue.isEmpty());
// Is queue empty?: false

console.log("Size of queue:", queue.size());
// Size of queue: 2
```

### Python

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        """Add an element to the rear of the queue."""
        self.items.append(item)

    def dequeue(self):
        """Remove and return the front element from the queue."""
        if not self.is_empty():
            return self.items.pop(0)
        else:
            return None

    def peek(self):
        """Return the front element of the queue without removing it."""
        if not self.is_empty():
            return self.items[0]
        else:
            return None

    def is_empty(self):
        """Check if the queue is empty."""
        return len(self.items) == 0

    def size(self):
        """Return the number of elements in the queue."""
        return len(self.items)

    def display(self):
        """Display the elements of the queue."""
        print(self.items)

# Example usage:
if __name__ == "__main__":
    queue = Queue()
    queue.enqueue(5)
    queue.enqueue(10)
    queue.enqueue(15)

    print("Queue:")
    queue.display()
    # Queue: [5, 10, 15]

    print("Front element:", queue.peek())
    # Front element: 5

    print("Dequeue:", queue.dequeue())
    # Dequeue: 5

    print("Queue after dequeue:")
    queue.display()
    # Queue after dequeue: [10, 15]

    print("Is queue empty?", queue.is_empty())
    # Is queue empty? False

    print("Size of queue:", queue.size())
    # Size of queue:: 2
```

Using Python Queue Module:

```python
from queue import Queue

# Creating a queue object
queue = Queue()

# Adding elements to the queue
queue.put(5)
queue.put(10)
queue.put(15)

# Displaying the queue
print("Queue:", queue.queue)
# Queue: deque([5, 10, 15])

# Getting the front element of the queue without removing it
print("Front element:", queue.queue[0])
# Front element: 5

# Removing and returning the front element of the queue
print("Dequeue:", queue.get())
# Dequeue: 5

# Displaying the queue after dequeue
print("Queue after dequeue:", queue.queue)
# Queue after dequeue: [10, 15]

# Checking if the queue is empty
print("Is queue empty?", queue.empty())
# Is queue empty? False

# Getting the size of the queue
print("Size of queue:", queue.qsize())
# Size of queue: 2
```

## Resources

[queue by Python Docs](https://docs.python.org/3/library/queue.html)

## Thank you!

Thank you for your time and for reading this!
