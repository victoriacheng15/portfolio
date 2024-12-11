---
title: "JavaScript - Generator"
description: "JavaScript generators: Craft pausable sequences with yield. Perfect for async tasks & data manipulation."
date: 2023-08-16
tags: [javascript]
---

## What is Generator?

A JavaScript generator is a special type of function that allows you to generate a sequence of values, one at a time, using the `yield` keyword. Unlike regular functions that run to completion and return a single value, generators can pause their execution and later resume it from where it left off. This unique ability to pause and resume execution makes generators a powerful tool for handling asynchronous operations, iterating over large datasets, and implementing custom iterators.

```js
function* myGeneratorFunction(num) {
	// Generator logic with yield statements
	for (let i = 0; i < num; i++) {
		yield `value ${i} was generated`;
	}
}

const generator = myGeneratorFunction(5);
console.log(generator.next());
// { value: 'value 0 was generated', done: false }
console.log(generator.next());
// { value: 'value 1 was generated', done: false }
console.log(generator.next());
// { value: 'value 2 was generated', done: false }
```

## Usages

- **Data Generation:** When dealing with large datasets, generators can be used to lazily generate and process data on-the-fly, rather than creating all the data upfront. This approach helps save memory and improves performance. For example, generating and processing data from a CSV file line by line.
- **Asynchronous Operations:** Generators can be used in combination with Promises or async/await to handle asynchronous operations in a more readable and sequential manner. This is especially useful when dealing with multiple asynchronous tasks that need to be executed in a specific order.

This code demonstrates the power of combining generator functions with asynchronous operations. We use an `async function`, `fetchApiData(url)`, to fetch data from a given URL using `fetch`. If there's a network error, it throws an 'Error' with the message 'Network response was not ok', otherwise, it returns the JSON response.

Next, we have a `generator` function, `dataGenerator(apiUrls)`, which takes an array of API URLs. The generator iterates through the URLs using a 'for...of' loop, yielding the results of the `fetchApiData` calls.

We also have an `async function`, `runGenerator(generator)`, that runs the generator and prints the results sequentially. It uses `generator.next()` to get the next value, waits for the Promise to resolve using `await`, and then logs the result using `console.log`. The function continues until `next.done` is true.

```js
async function fetchApiData(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}

function* dataGenerator(apiUrls) {
	for (const url of apiUrls) {
		yield fetchApiData(url);
	}
}

async function runGenerator(generator) {
	const next = generator.next();
	if (!next.done) {
		try {
			const result = await next.value;
			console.log(result);
			await runGenerator(generator);
		} catch (error) {
			console.error("Error:", error.message);
		}
	}
}

const apiUrls = [
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/comments",
	"https://jsonplaceholder.typicode.com/todos",
];

const generator = dataGenerator(apiUrls);
runGenerator(generator);
```

## Recap

From this, I've learned that JavaScript generators employ the `yield` keyword to create sequences of values, uniquely capable of pausing and resuming execution. The code example illustrates generating messages using a generator. It also showcases how generators work with async functions, fetching data in sequence from different URLs.

I've also included a couple of links below that offer further insight into how generators function and explore some practical use cases.

## Resources

[MDN - Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

[Use-Cases For JavaScript Generators](https://dev.to/rfornal/use-cases-for-javascript-generators-1npc)

[Use case: simpler asynchronous code](https://exploringjs.com/es6/ch_generators.html#_use-case-simpler-asynchronous-code)

[Web Dev Simplified - Learn JavaScript Generators In 12 Minutes](https://www.youtube.com/watch?v=IJ6EgdiI_wU)

## Thank you!

Thank you for your time and for reading this!
