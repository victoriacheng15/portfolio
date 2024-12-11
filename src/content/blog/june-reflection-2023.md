---
title: June Reflection 2023
description: "Reflecting on what I learned from Harvard CS50 from memory to HTML, rate limiting, and my thoughts on the tracking system for posts and books."
date: 2023-06-28
tags: [reflection]
---

## Monthly Reflection

This month has been thought-provoking. I discovered the book "Limitless," expanding my thoughts and revealing possibilities for better reading. I also found a remarkable YouTuber who shares useful notion planning techniques and recommends helpful books for enhancing life and organization. This experience emphasizes the importance of taking responsibility for organizing my life and pursuing goals.

Inspired by this, I decided to utilize Notion and construct a system for managing my blog posts (ideas and drafts), book, task, and learning lists. This enables me to plan effectively and have a clear view of my current progress. I have been using and refining this system, and the outcome has been truly amazing. I can now plan my blog posts ahead of time with ease. The purpose of this system is to offload the task of remembering things from my brain.

> To attain knowledge, add things every day. To attain wisdom, remove things every day. — Lao Tzu

I resonated with this quote by Lao Tzu. To gain knowledge, one should actively acquire new information and experiences each day. However, true wisdom is attained by letting go and removing unnecessary or burdensome things from one’s life. It emphasizes the importance of continuous learning and the art of letting go to achieve a deeper level of understanding and wisdom.

## Blogs

- <a href="https://victoriacheng15.vercel.app/posts/typescript-utility-types-awaited" target="_blank" rel="noopener noreferrer">TypeScript Utility Types Awaited</a>
- <a href="https://victoriacheng15.vercel.app/posts/javascript-optional-chaining-operator" target="_blank" rel="noopener noreferrer">JavaScript Optional Chaining Operator</a>
- <a href="https://victoriacheng15.vercel.app/posts/unleashing-your-limitless-potential-from-the-limitless-book" target="_blank" rel="noopener noreferrer">Unleashing Your Limitless Potential from the Limitless Book</a>
- <a href="https://victoriacheng15.vercel.app/posts/javascript-promise-promise-all-and-async-await" target="_blank" rel="noopener noreferrer">JavaScript - Promise, Promise All, and async/await</a>
- <a href="https://victoriacheng15.vercel.app/posts/atomic-habits-transforming-lives-with-lasting-habits" target="_blank" rel="noopener noreferrer">Atomic Habits - Transforming Lives with Lasting Habits</a>

## Books

1. `Limitless` by Jim Kwik - provides techniques and insights to unlock your brain's potential, enhancing memory, learning, and unleashing your full cognitive power.
2. `12 Week Year` by Brian P. Moran and Michael Lennington - provides a systematic approach to achieving goals with focused execution, maximizing productivity, and accelerating success in shorter timeframes
3. `The Phoenix Project` by Gene Kim - reveals a transformative journey in IT management, emphasizing the importance of collaboration and streamlining processes for business success
4. `Grokking Algorithms` by Aditya Bhargava - simplifies complex algorithms through clear explanations and visual examples, making them accessible to all levels of programmers
5. `The Subtle Art of Not Giving a Fk` by Mark Manson - challenges conventional wisdom, offering refreshing perspectives on embracing authenticity and prioritizing what truly matters in life

## Harvard CS50

- <a href="https://www.youtube.com/watch?v=8mAITcNt710" target="_blank" rel="noopener noreferrer">Harvard CS50 – Full Computer Science University Course on Youtube</a>
- <a href="https://cs50.harvard.edu/x/2023/" target="_blank" rel="noopener noreferrer">Harvard CS50 Class Materials</a>

### Memory

- Image enhancement and pixelation:
  - Crime drama scenario with image enhancement and zooming, revealing pixels.
- Representation of color:
  - Image as a map of bits (0s for black, 1s for white).
  - RGB values and hexadecimal system for color representation.
- Memory addresses and pointers:
  - Memory blocks, hexadecimal numbering, and accessing addresses using "&" and "\*".
  - Pointers as variables containing memory addresses.
- Strings and pointer manipulation:
  - Strings as arrays of characters and accessing them using pointers.
  - Pointer arithmetic, limitations, and comparing strings.
- String copying and memory allocation:
  - Copying strings using loops and strcpy function.
  - Memory allocation for strings and including null terminator.

### Data Structures

- Data Structures:
  - Abstract data structures: conceptual structures to understand the implementation of concrete data structures.
- Stacks and Queues:
  - Queues: **FIFO** (first in first out) with push and pop.
  - Stacks: **LIFO** (last in first out) with enqueue and dequeue.
- Resizing Arrays:
  - Arrays as blocks of contiguous memory.
  - Copying array items when adding elements.
  - Using pointers and dynamic memory allocation to create a dynamic array.
- Linked Lists:
  - Nodes containing values and pointers to the next node.
  - Linked lists allow for non-contiguous memory storage, enabling dynamic growth and shrinking.

### Python

- Easier code writing and compilation than C.
- Implicit data type declaration with built-in types.
- Simplified data types like range, list, tuple, dict, and set.
- Convenient import and use of libraries like PIL.
- Syntax differences in conditionals, loops, and comparisons with indentation.
- Simpler variable declaration, loops, and functions.
- Object-oriented programming support with attributes and methods.

### SQL

- CSV Files and Python:
  - CSV files: Represent data as flat-file databases.
  - Python supports reading and manipulating CSV files.
  - Python's **`csv`** module for file operations.
- Counting and Sorting Data:
  - You can count occurrences of specific values in a CSV file using if statements or dictionaries.
  - Python provides functions to sort and display the counts in ascending or descending order.
- Using Relational Databases with SQL:
  - Relational databases store data in tables.
  - SQLite is a popular SQL engine for Python.
  - SQL commands (SELECT, WHERE, LIKE, ORDER BY) query and retrieve data.

### HTML, CSS, JavaScript

- Routing and TCP/IP Protocols:
  - Routing enables data transfer between points.
  - TCP/IP protocols facilitate internet data transfer.
  - IP identifies computers with unique addresses.
  - TCP distinguishes web services with port numbers.
- DNS (Domain Name Systems):
  - DNS routes website addresses to IP addresses.
  - It maintains a table linking domain names to IPs.
- HTTP (Hypertext Transfer Protocol):
  - HTTP is used for building web applications.
  - `https://` in URLs indicates secure communication.
  - HTTP uses GET and POST requests.
  - Response headers contain status codes.

## System Design - Rate Limit

Rate limiting is a distributed system pattern that controls access to resources. It prevents resource starvation, reduces costs, and avoids server overload. Examples include limiting tweets on Twitter and reading requests on Google Docs API. It finds applications in social media platforms, online ticketing, cloud storage APIs, and SaaS platforms. The core concepts are the limit, window, and identifier. Rate-limiting responses include blocking (denying access), throttling (slowing down requests), and shaping (lower priority for exceeding limits).

- <a href="https://blog.bytebytego.com/p/rate-limiting-fundamentals" target="_blank" rel="noopener noreferrer">Rate Limiting Fundamentals By Alex Xu</a>

## Thank you!

Thank you for your time and for reading this!
