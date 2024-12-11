---
title: "JavaScript - Bind, Call, and Apply"
description: "JavaScript's bind(), call(), and apply() methods control function context, allowing explicit this binding and argument passing."
date: 2023-07-05
tags: [javascript]
---

## What are they?

In JavaScript, **`bind()`**, **`call()`**, and **`apply()`** are methods that allow you to control the execution context of a function. They provide ways to explicitly set the value of **`this`** within a function and optionally pass arguments to the function. These methods are commonly used when you need to define the context in which a function should be executed or when you want to borrow methods from one object and apply them to another. By utilizing **`bind()`**, **`call()`**, and **`apply()`**, you have more flexibility in managing the behavior and invocation of functions in your JavaScript code.

### bind()

The **`bind()`** method creates a new function that, when called, has **`this`** keyword set to a specified value. It returns a new function with the bound **`this`** value, which can be called later. The **`bind()`** method does not immediately execute the function. It allows you to curry functions (pre-set some arguments) or create a new function with a specific context.

```js
const obj = {
	name: "Zephyr",
	sayHello: function () {
		console.log(`Hello, ${this.name}!`);
	},
};

const hello = obj.sayHello.bind(obj);
hello(); // Output: Hello, Zephyr!
```

It also can be used for function currying.

```js
function multiply(a, b) {
	return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(4)); // Output: 8
```

Or using for event handling.

```html
<button>click me</button> <button>Stop click me</button>
```

```js
const buttons = document.querySelectorAll("button");

const handleClick = function () {
	console.log(`Button "${this.textContent}" clicked!`);
};

buttons.forEach((button) => {
	button.addEventListener("click", handleClick.bind(button));
});

// either Button "Click me" clicked
// or Button "Stop click me" clicked
// in the console
```

Alternatively, you can check out this [codepen for bind() method demo](https://codepen.io/victoriacheng15/pen/PoxKEqN) to see how it works. Feel free to change the text content for these buttons.

### call()

The **`call()`** method calls a function with a given **`this`** value and arguments provided individually. It immediately executes the function with the specified context (**`this`** value) and any additional arguments passed individually.

```js
const obj1 = {
	name: "Zephyr",
};

function sayHello() {
	console.log(`Hello, ${this.name}!`);
}

sayHello.call(obj1); // Output: Hello, Zephyr!
```

It also can be used to borrow functions from another object.

```js
const obj2 = {
	name: "Victor",
};

sayHello.call(obj2); // Output: Hello, Victor!
```

Or function chaining…

```js
const calculator = {
	value: 0,
	add: function (num) {
		this.value += num;
		return this;
	},
	multiply: function (num) {
		this.value *= num;
		return this;
	},
	getValue: function () {
		return this.value;
	},
};

const result = calculator.add(5).multiply(3).getValue();
console.log(result); // Output: 15
```

### apply()

The **`apply()`** method is similar to **`call()`**, but it takes arguments as an array. It calls a function with a given **`this`** value and an array of arguments. Like **`call()`**, it immediately executes the function with the specified context and arguments.

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // Output: 7

const min = Math.min.apply(null, numbers);

console.log(min); // Output: 2
```

Or you need to pass dynamic arguments…

```js
function sum(a, b, c) {
	return a + b + c;
}

// or

function sum(...args) {
	return [...args].reduce((acc, curr) => acc + curr, 0);
}

const numbers = [1, 2, 3];
const result = sum.apply(null, numbers);
console.log(result); // Output: 6
```

## Recap

**`bind()`**, **`call()`**, and **`apply()`** are JavaScript methods that allow you to control the execution context of a function. They enable you to set the **`this`** value explicitly and pass arguments to the function. These methods provide flexibility in managing function invocation and context manipulation in JavaScript.

Additionally, `call()` and `apply()` are similar, but one difference is that `call()` takes in a _comma-separated_ argument while `apply()` takes in an _array_ of arguments. An easy way to remember, “c” for call and comma-separated and “a” for apply and array.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" target="_blank" rel="noopener noreferrer">MDN docs - bind()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/call" target="_blank" rel="noopener noreferrer">MDN docs - call()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/apply" target="_blank" rel="noopener noreferrer">MDN docs - apply()</a>

## Thank you!

Thank you for your time and for reading this!
