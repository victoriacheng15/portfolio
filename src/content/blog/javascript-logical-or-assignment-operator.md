---
title: "JavaScript - Logical OR Assignment Operator"
description: "Explore the use of JavaScript’s logical OR assignment operator with various data types and understand its real-world applications."
date: 2023-11-29
tags: [javascript]
---

## What is Logical OR Assignment?

The logical OR assignment (||=) is a logical operation that takes two values: a target variable and a source value.

Here’s how it works:

- If the original value of the target variable is **truthy** (i.e., it’s not `false`, `0`, `null`, `undefined`, `NaN`, or an empty string `""`), then nothing happens. The target variable keeps its original value.
- If the original value of the target variable is **falsy** (i.e., it is one of the following: `false`, `0`, `null`, `undefined`, `NaN`, or an empty string `""`), then the target variable is assigned the value of the source value.

## Examples

- Example with a number:

```js
let num = 0;
num ||= 100;

console.log(num); // ouput: 100
```

- Example with a string:

```js
let str = "";
str ||= "another string";

console.log(str); // output: another string
```

- Example with an object:

```js
let obj = null;
obj ||= { greeting: "Hello" };

console.log(obj); // output: { greeting: "Hello" }
```

- Example with an array:

```js
let arr = undefined;
arr ||= [1, 2, 3];

console.log(arr); // Output: [1, 2, 3]
```

## Recap

The logical OR assignment is a handy tool that assigns a new value to a variable if its original value is falsy. For instance, if a string is empty or a number is zero, the operator will assign a new value to them/ However, if these variables already hold truthy values, their values will remain unchanged.

In JavaScript, empty arrays (`[]`) and empty objects (`{}`) are seen as “truthy”. So, they won’t get a new value with the `||=` operator. You can check this by using `Boolean()`, both will return **true**.

In essence, if the original value of a variable is either `null`, `undefined`, `false`, `0`, or an empty string (`""`), then the variable will be assigned a new value.

## Resources

[MDN Docs - Logical OR assignment (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

## Thank you!

Thank you for your time and for reading this!
