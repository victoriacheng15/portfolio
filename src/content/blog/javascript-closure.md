---
title: "JavaScript - Closure"
description: "JavaScript closure: Inner functions retain access to variables from their parent functions, even after the parent functions have finished executing."
date: 2023-07-12
tags: [javascript]
---

## What is Closure?

In JavaScript, closure is a combination of a function and the lexical environment within which that function was declared. You may think what is a lexical environment? It is an environment that is wrapped with curly brackets.

```js
function lexical() {
	// This is the lexical environment
}
```

In simpler terms, a closure allows a function to access variables from its outer function.

## Example

```js
function test() {
	const a = "a";
	console.log(
		"test:",
		typeof a !== "undefined" ? "a" : new Error("Variable 'a' does not exist in test"),
	);
	console.log(
		"test:",
		typeof b !== "undefined" ? "b" : new Error("Variable 'b' does not exist in test"),
	);
	console.log(
		"test:",
		typeof c !== "undefined" ? "c" : new Error("Variable 'c' does not exist in test"),
	);

	return function test2() {
		const b = "b";
		console.log(
			"test2:",
			typeof a !== "undefined" ? a : new Error("Variable 'a' does not exist in test2"),
		);
		console.log(
			"test2:",
			typeof b !== "undefined" ? b : new Error("Variable 'b' does not exist in test2"),
		);
		console.log(
			"test2:",
			typeof c !== "undefined" ? c : new Error("Variable 'c' does not exist in test2"),
		);

		return function test3() {
			const c = "c";
			console.log(
				"test3:",
				typeof a !== "undefined" ? a : new Error("Variable 'a' does not exist in test3"),
			);
			console.log(
				"test3:",
				typeof b !== "undefined" ? b : new Error("Variable 'b' does not exist in test3"),
			);
			console.log(
				"test3:",
				typeof c !== "undefined" ? c : new Error("Variable 'c' does not exist in test3"),
			);
		};
	};
}

test()()();

// test: a
// test: Error: Variable 'b' does not exist in test
// test: Error: Variable 'c' does not exist in test

// test2: a
// test2: b
// test2: Error: Variable 'c' does not exist in test2

// test3: a
// test3: b
// test3: c
```

Each nested functions form a closure. When a closure is created, it maintains a reference to the variables in its outer function, even if the outer function has finished executing. For example, the `test2` function has access to the `a` variable from the outer scope of the `test` function. This is because the closure formed by the `test2` retains a reference to the variables in the scope of its parent function, the `test` function. Similar idea for the `test3` function.

Closures allow the inner functions to access the variables they need from the outer scopes, even when those variables are not directly passed as arguments. This can be a powerful mechanism in JavaScript for encapsulating data and creating private variables or functions.

## Recap

Initially, understanding the concept of closure might seem challenging. However, once you observe the pattern, it becomes quite straightforward. An important characteristic of closure is that an outer function cannot access its own inner function(s), while an inner function can access its own outer function(s). For instance, the **`test3`** function access variables `a` and `b` from its outer functions, which are the `test` and `test2` functions. On the other hand, the `test` function cannot access variables `b` and `c` from its inner functions, which are the `test2` and `test3` functions.

I hope the provided example helps to illustrate this concept effectively!

## Resources

- [MDN docs - Closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JS Info - Closure](https://javascript.info/closure)

## Thank you!

Thank you for your time and for reading this!
