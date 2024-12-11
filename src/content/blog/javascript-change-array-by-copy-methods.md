---
title: "JavaScript - Change Array by Copy Methods"
description: "Elevate your coding experience with the latest array methods in JavaScript ES2023. Explore user-friendly and non-destructive array manipulation."
date: 2024-02-13
tags: [javascript]
---

## What is Change Array by Copy?

JavaScript enthusiasts, rejoice! The latest iteration, ES2023, has recently graced us with its presence, bringing along a slew of new features, including some noteworthy additions to Array methods. In this post, we'll delve into four methods:

- Array.prototype.toReversed()
- Array.prototype.toSorted()
- Array.prototype.toSpliced()
- Array.prototype.with()

ES2023 brings a noteworthy upgrade with the introduction of four array methods tailored to simplify your coding endeavors. These methods offer a straightforward approach to generating copies of arrays without altering the original! Before this enhancement, developers typically relied on the spread operator or `Array.from()` to duplicate an array before making modifications.

## Array.prototype.toReversed()

The `toReversed()` method performs a two-step operation on the original array. First, it creates a copy of the array, and then it reverses the order of the elements. The result is a new array that retains the reversed sequence, all without modifying the original array.

```js
const toReversed = arr.toReversed();
console.log({ arr, toReversed });
// arr: [ 1, 2, 3, 4, 5 ]
// toReversed: [ 5, 4, 3, 2, 1 ]
```

## Array.prototype.toSorted()

The `toSorted()` method provides a sorted copy of the array based on a specified comparator function. In the example, the array is sorted in descending order, showcasing the flexibility of this method. Like other array methods introduced in ES2023, the original array remains unaltered.

```js
const toSorted = arr.toSorted((a, b) => b - a);
console.log({ arr, toSorted });
// arr: [ 1, 2, 3, 4, 5 ]
// toSorted: [ 5, 4, 3, 2, 1 ]
```

## Array.prototype.toSpliced()

With the `toSpliced()` method, you can create a new array by splicing out a specified range of elements from the original array. Here, elements at positions 1 and 2 are removed, resulting in a modified array, while the original array remains unchanged.

```js
const toSpliced = arr.toSpliced(1, 2);
console.log({ arr, toSpliced });
// arr: [ 1, 2, 3, 4, 5 ]
// toSpliced: [ 1, 4, 5 ]
```

## Array.prototype.with()

The `with()` method is a versatile addition to array manipulation, allowing you to add elements to the array. It takes two parameters: the `index` at which you want to insert the new element and the `value` of the element to be added. The result is a new array that includes the specified element at the desired position. This allows for easy expansion of the array without modifying the original array itself.

```js
const toWith = arr.with(2, 6);
console.log({ arr, toWith });
// arr: [ 1, 2, 3, 4, 5 ],
// toWith: [ 1, 2, 6, 4, 5 ]
```

## Recap

These methods offer similar functionality to existing methods like `reverse()`, `sort()`, and `splice()`, but with a key difference: they create a new copy of the original array and modify the copy instead of altering the original itself. This means you can safely sort, reverse, and manipulate the data without any unwanted side effects!

At the time of posting, these methods should work with most browsers, if unsure, double-check at [Can I use](https://caniuse.com/) to be sure.

## Resources

[TC 39 - Change Array by copy](https://github.com/tc39/proposal-change-array-by-copy)

[MDN Docs - toReversed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

[MDN Docs - toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

[MDN Docs - toSpliced()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

[MDN Docs - with()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

## Thank you!

Thank you for your time and for reading this!
