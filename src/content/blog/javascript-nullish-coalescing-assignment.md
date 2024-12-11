---
title: "JavaScript - Nullish Coalescing Assignment"
description: "Discover JavaScript’s Nullish Coalescing Assignment (??=) operator. Learn its use in assigning default values and ensuring non-nullish variables."
date: 2023-12-06
tags: [javascript]
---

## What is Nullish Coalescing Assignment?

It is an operator in JavaScript that is used to assign a value to variable if the current value of the variable is bullish, like `null` or `undefined`. It is also known as the logical bullish assignment operator.

Syntax:

```js
x ??= y;
```

JavaScript checks if the variable `x` is nullish or not. If `x` is nullish, then the value of `y` is assigned to `x`. On the other hand, if `x` is **NOT** nullish, no assignment is performed.

## Examples

- Number:

```js
let num = null;
let defaultNum = 10;
num ??= defaultNum;

console.log(num); // output: 10

let num2 = 5;
let defaultNum2 = 10;
num2 ??= defaultNum2;

console.log(num2); // output: 5
```

- String:

```js
let str = null;
let defaultStr = "Hello, World!";
str ??= defaultStr;

console.log(str); // output: "Hello, World!"

let str2 = "Hello";
let defaultStr2 = "Hello, World!";
str2 ??= defaultStr2;

console.log(str2); // output: "Hello"
```

- Array:

```js
let arr = null;
let defaultArr = [1, 2, 3];
arr ??= defaultArr;

console.log(arr); // output: [1, 2, 3]

let arr2 = [4, 5, 6];
let defaultArr2 = [1, 2, 3];
arr2 ??= defaultArr2;

console.log(arr2); // output: [4, 5, 6]
```

- Object:

```js
let obj = null;
let defaultObj = { name: "Bing", type: "Assistant" };
obj ??= defaultObj;

console.log(obj); // output: { name: "Bing", type: "Assistant" }

let obj2 = { name: "User", type: "Human" };
let defaultObj2 = { name: "Bing", type: "Assistant" };
obj2 ??= defaultObj2;

console.log(obj2); // output: { name: "User", type: "Human" }
```

Keep in mind, that this operator only kicks into action if the current value of the variable is either **null** or **\*undefined**. If the variable’s current value is **false**, it won’t trigger an assignment. So, it’s all about whether the variable is nullish or not!

## Recap

The Nullish Coalescing Assignment (`??=`) operator in JavaScript is a convenient tool. It assigns a new value to a variable, but only if that variable’s current value is nullish, meaning it’s either **null** or **undefined**. This operator is a great way to set default values. It ensures that variables aren’t left with nullish values, making your code more robust and easier to manage.

## Resources

[MDN Docs - Nullish coalescing assignment (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

## Thank you!

Thank you for your time and for reading this!
