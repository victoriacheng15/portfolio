---
title: JavaScript - Nullish Coalescing Operator
description: "Let's learn about what is nullish coalescing operator and how it is different from a logical OR operator!"
date: 2023-05-09
tags: [javascript]
---

## What is Nullish Coalescing Operator?

The Nullish Coalescing Operator (??) is a relatively new addition to JavaScript (ES2020) that provides a concise way to check for `null` or `undefined` values. It can be used to provide a default value when a given expression is null or undefined, without conflating the two.

The operator works by returning the left-hand side operand if it is NOT null or undefined, and otherwise, evaluating and returning the right-hand side operand.

### Example

```js
const value = null;

const check = value ?? "2nd value";
console.log(check); // 2nd value
// try assign undefined to value, it will return 2nd value again
```

When the `value` is null or undefined, the `check` value will return the value on the right side.

```js
const value = "1st value";

const check = value ?? "2nd value";
console.log(check); // 1st value
```

When the `value` is a string, the `check` value will return the value on the left side. This is because the `value` is existed and is not null or undefined.

### A pitfall

In JavaScript, an empty string and number zero's boolean value is false and a non-empty string and number one's boolean value is true. Remember the nullish coalescing operator ONLY check for null and undefined values.

You could copy and paste the code below to the browser's console or editor and see.

```js
console.log("Boolean value for empty string is: ", Boolean(""));
console.log("Boolean value for non-empty string is: ", Boolean("hi"));
/* 
Boolean value for empty string is:  false
Boolean value for non-empty string is:  true
*/

console.log("Boolean value for number zero is: ", Boolean(0));
console.log("Boolean value for number one is: ", Boolean(1));

/* 
Boolean value for number zero is:  false
Boolean value for number one is:  true 
*/
```

```js
const value = "";

const check = value ?? "2nd value";
console.log(check); // ""
```

```js
const value = 0;

const check = value ?? "2nd value";
console.log(check); // 0
```

The code snippets demonstrate the usage of the nullish coalescing operator in JavaScript. The first snippet assigns an empty string to a variable and uses the operator to assign a default value of `2nd value` to another variable. Since the left-hand side operand is not strictly null or undefined, the operator returns the empty string. In the second snippet, the variable is assigned the number 0 and the operator also returns 0 because the left-hand side operand is not strictly null or undefined, like the first snippet.

If the value variable is assigned with either true or false (in the Boolean context), you would need to use the logical OR operator instead since it returns the first truthy operand it encounters, regardless of whether it is strictly null or undefined.

```js
const value = "";

const check = value || "2nd value";
console.log(check); // 2nd value
// try assign 0 or null or undefined to value, it will return 2nd value again
```

## My experience with nullish coalescing operator

APIs often return values that may contain null or undefined. This is particularly common when retrieving complex data structures with missing or incomplete information. For instance, some countries may not have a `capital` property in an API response. In such cases, there are two ways to display the capital name: either display the actual value if it exists or show `N/A` as a default value.

You can check out <a href="https://restcountries.com/v3.1/alpha?codes=ca,gl" target="_blank" rel="noopener noreferrer">what information the API returns for Canada and Antarctica</a>.

### First Method: conditional (ternary) Operator

```js
<p>Captial: {captial ? captial : "N/A"}</p>
```

### Second Method: Nullish Coalescing Operator

```js
<p>Captial: {captial ?? "N/A"}</p>
```

The ternary operator is a useful tool for simplifying code, but if an API returns a value that is either null or undefined, it can be more efficient to use the nullish coalescing operator instead. This operator simplifies the code even further by providing a default value only when the variable is strictly null or undefined, without the need for an explicit comparison using the ternary operator.

## Recap

Choosing between the nullish coalescing operator and the logical OR operator can be confusing. However, a simple question can help to determine which one to use: `Will the value ONLY display null or undefined?` If the answer is `yes`, the nullish coalescing operator is the way to go. On the other hand, if the answer is `no` as the value will have falsy values like the empty string or number 0, the logical OR operator is the better choice.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noopener noreferrer">MDN Docs - Nullish coalescing operator (??)</a>
- <a href="https://javascript.info/nullish-coalescing-operator" target="_blank" rel="noopener noreferrer">JavaScript Info - Nullish coalescing operator (??)</a>

## Thank you!

Thank you for your time and for reading this!
