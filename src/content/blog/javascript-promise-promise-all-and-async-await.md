---
title: JavaScript - Promise, Promise All, and async/await
description: "Discover the concepts of Promises, Promise.all(), and async/await in JS, along with example code for each. Learn to handle asynchronous operations effectively."
date: 2023-06-21
tags: [javascript]
---

## What is Asynchronous Programming?

Asynchronous programming is a technique that allows your program to start a long-running task and still be able to be responsive to other events while the task runs, rather than having to wait until the task is completed. Once the task is done, the program is presented with the result. We will explore the 3 methods that we use often to fetch APIs or any tasks!

### Promise

Promises are a way to handle asynchronous operations in JavaScript. A promise represents a value that may not be available yet but will be resolved in the future. It has three states: pending, fulfilled, or rejected. When a promise is fulfilled or rejected, it is said to be "settled." Promises are used to handle asynchronous operations.

```js
// Creating a Promise that resolves after a timeout
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise resolved!");
	}, 2000);
});

// Using the Promise
myPromise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
```

### Promise.all()

It is a method that takes an array of promises as input and returns a new promise. This new promise is fulfilled when all the promises in the input array have been fulfilled or rejected if any of the promises are rejected. It allows you to wait for multiple asynchronous operations to complete simultaneously.

```js
// Creating an array of promises
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 resolved");
	}, 3000);
});
const promise3 = fetch("https://api.example.com/data"); // Example of an HTTP request

// Using Promise.all()
Promise.all([promise1, promise2, promise3])
	.then((results) => {
		console.log(results);
	})
	.catch((error) => {
		console.log(error);
	});
```

### async/await

It is a feature introduced in ES2017 (ES8) that provides a more readable way to write asynchronous code using promises. It allows you to write asynchronous code in a synchronous style, making it easier to understand and maintain.

- The async keyword makes an async function
- The await keyword makes the async function to pause the execution until a promise is resolved

```js
// Example asynchronous function using async/await
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Data fetched successfully!");
		}, 2000);
	});
}

async function getData() {
	try {
		const result = await fetchData();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

// Calling the async function
getData();
```

## Recap

Promises are the fundamental building blocks for handling asynchronous operations. Promise.all() is a utility function that helps manage multiple promises concurrently. async/await is a syntactic sugar that simplifies writing asynchronous code in a synchronous-like manner using promises.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">MDN Docs - Promise</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noopener noreferrer">MDN Docs - Promise.all()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noopener noreferrer">MDN Docs - async function</a>
- <a href="https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/" target="_blank" rel="noopener noreferrer">fCC - Asynchronous Programming in JavaScript – Guide for Beginners</a>

## Thank you!

Thank you for your time and for reading this!
