---
title: "Coding Challenges: What I Learned From Write Your wc Tool?"
description: "Dive into coding challenges with 'Write Your Own wc tool.' Explore TDD, classes in JavaScript, and utilities like spyOn and process.stdin."
date: 2024-01-11
tags: [coding-challenges, javascript]
---

## Coding Challenges - Write Your Own wc tool

It is a challenge created by John Crickett and the purpose of this challenge is to build your own version of the Unix command line tool `wc`. The wc is a command-line tool that can analyze and display information about the number of bytes, lines, words, and characters from a text file or input through the terminal.

```js
wc[options][files];
```

- `-c`: Display the bytes count
- `-l`: Display the number of lines
- `-w`: Display the number of words
- `-m`: Display the number of characters

## What I Learned from this Project

**Test-Driven Development (TDD) Approach:**

Switching to Test-Driven Development (TDD) was a bit tricky since I usually code first and test later, or sometimes, skip tests. But this time, I committed to doing TDD. I noticed that starting with tests makes you think about the main functions you need. You write functions without actual code, then sort out the order. The initial code might not look great, but the process of writing tests and refining the code ensures your functions work correctly.

**classes in JavaScript**

While I usually prefer using functions in JavaScript, experimenting with classes for this project brought some benefits. Using classes not only provided a more structured and encapsulated approach, especially when dealing with multiple functions related to the wc tool but additionally, it meant I didn't need to see the function keyword every couple of lines. This approach facilitated a cleaner code organization

Ultimately, the choice between functions and classes depends on the specific requirements of your project. Functions are excellent for simplicity and smaller tasks, while classes offer more structure and encapsulation for larger and more complex applications.

**spyOn Utility:**

The **`spyOn`** utility in testing frameworks like Jest proved valuable for observing the behavior of functions without invoking their original implementations. This was particularly useful for testing functions that interacted with external dependencies, such as reading file contents.

**process.stdin:**

`process.stdin` emerged as a key component—a readable stream in Node.js representing the standard input (stdin) of the current process. This feature enables a Node.js program to receive input from the user via the command line or from other processes, enhancing interactivity and command-line functionality.

After this exploration, I've also provided handy links to further resources. You can delve deeper into the `spyOn` utility and understand more about `process.stdin`. Additionally, for those eager to tackle coding challenges or explore the codebase of my customized JavaScript version of `ccwc`, the links to the challenges, repository, and documentation are below for your convenience. Happy coding! 😎

## Resources

[Jest Docs - spyOn](https://jestjs.io/docs/jest-object#jestspyonobject-methodname)

[Node.js Docs - process.stdin](https://nodejs.org/api/process.html#process_process_stdin)

[Coding Challenges](https://codingchallenges.fyi/)

[cc-write-your-own-wc repo](https://github.com/victoriacheng15/cc-write-your-own-wc/tree/main#readme)

## Thank you!

Thank you for your time and for reading this!
