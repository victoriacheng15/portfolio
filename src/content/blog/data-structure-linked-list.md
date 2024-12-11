---
title: "Data Structure - Linked List"
description: "Dive into the basics of linked lists: understand how they work, their operations, and explore two key types."
date: 2024-05-07
tags: [dsa]
---

## What is a Linked List?

A linked lists stand as a building block. Picture a series of interconnected nodes, each containing _data_ and a _pointer_ to the next node in the sequence. This sequential arrangement is what gives linked lists their distinctive structure and functionality.

At its core, a linked list is a dynamic data structure where elements, called nodes, are not stored in contiguous memory locations like arrays but rather scattered across memory, connected by pointers. This allows for efficient insertion and deletion operations, as no shifting of elements is required.

## How Does Linked Lists Work?

The linked list supports three main operations:

- **Insertion** - add an element at the beginning, end or at given index in the list
- **deletion** - remove an element at its index or value
- **Search** - find an element given its value

Imagine you have a simple singly linked list, where each node contains some data and a pointer to the next node. To traverse the list, you start from the head node (the first node) and follow the pointers until you reach the end of the list, where the pointer is null. This traversal process gives you access to each element in the list, one by one.

## Types of Linked lists

### Singly Linked List

Each node points to the next node in the sqeuence. It is straightforward and efficient for insertion and deletion at the beginning but less efficient for accessing elements in the middle

![head node only](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/3c94f8cb-f41f-4ae8-904c-eb7c35d70a08)

![5 nodes with a pointer to next node, and the last node points to null](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/a9ace508-6902-44f2-bf1e-3010f2f85e52)

### Doubly Linked List

Each node contains two pointers; one point to the _next_ node and another to the _previous_ node. This bidirectional linkage allows for efficient traversal in both direcitons but requires more memory due to the extra pointers.

![a node with 2 pointers to null on both sides](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/f59fa65a-2515-436e-9d17-9c4a2e05d0eb)

![5 nodes with pointers to each other with head and tail node points to null](https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/88efd82c-5ba8-4bc6-9b27-4eaa95fc0a1c)

It's important to clarify that while a linked list typically ends with a node whose next pointer is null, indicating the list's end, having a tail node at the end is optional. If included, this tail node acts as a reference for the end of the list, similar to how the head node marks the beginning.

## Resources

[Linked Lists](https://sbme-tutorials.github.io/2020/data-structure-FALL/notes/week03b.html)

[Types of Linked List in Data Structures by Simplilearn](https://www.simplilearn.com/tutorials/data-structure-tutorial/types-of-linked-list)

[List by ByteByteGO](https://youtu.be/ouipSd_5ivQ?t=23)

## Thank you!

Thank you for your time and for reading this!
