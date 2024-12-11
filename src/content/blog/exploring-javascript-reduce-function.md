---
title: Exploring JavaScript Reduce Function
description: "The reduce function is one of the built-in methods in JS that allow you to transform an array into a single value by iterating over each element in the array."
date: 2023-02-15
tags: [javascript]
---

## What is reduce()?

It is a built-in function array method in JavaScript that allows you to transform an array into a single value. It does this by iterating over each element in the array and accumulating a result based on the operation you define.

basic syntax:

```
array.reduce((accumulator, currentValue) => {
	// do something
}, initialValue);
```

The reduce function takes 4 arguments:

- `accumulator`: the accumulated result of previous iterations
- `currentValue`: the current element being processed
- `currentIndex`: the index of the current element being processed
- `array`: the original array that reduce() was called on

Let's see a simple example. We need to get the total value from an array of numbers.

### When reduce() did not exist

It is commonly used `for loop` to get the total sum.

```js
const arr = [1, 2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < arr.length; i++) {
	console.log(`index: ${i}, currTotal: ${total}, num: ${arr[i]}`);
	total += arr[i];
}

// without console.log
for (let i = 0; i < arr.length; i++) {
	total += arr[i];
}

console.log(`total value: ${total}`);
```

```
index: 0, currTotal: 0, num: 1
index: 1, currTotal: 1, num: 2
index: 2, currTotal: 3, num: 3
index: 3, currTotal: 6, num: 4
index: 4, currTotal: 10, num: 5
index: 5, currTotal: 15, num: 6
total value: 42
```

### Now we have reduce()

```js
const arr = [1, 2, 3, 4, 5, 6];

const initialValue = 0;

const res = arr.reduce((currTotal, num, index) => {
	console.log(`index: ${index}, currTotal: ${currTotal}, num: ${num}`);
	return currTotal + num;
}, initialValue);

// without console.log
const res = arr.reduce((currTotal, num) => {
	return currTotal + num;
}, initialValue);

// utilize arrow function
const res = arr.reduce((currTotal, num) => currTotal + num, initialValue);

// without create initialValue variable
const res = arr.reduce((currTotal, num) => currTotal + num, 0);

console.log(`total value: ${res}`);
```

```
index: 0, currTotal: 0, num: 1
index: 1, currTotal: 1, num: 2
index: 2, currTotal: 3, num: 3
index: 3, currTotal: 6, num: 4
index: 4, currTotal: 10, num: 5
index: 5, currTotal: 15, num: 6
total value: 21
```

Additionally, `accumulator` and `currentValue` could be the `callbackFn`. This works in the same way as `const res = arr.reduce((currTotal, num) => currTotal + num, 0);`, but you extract the sum function out.

```js
const arr = [1, 2, 3, 4, 5, 6];

const sum = (accumulator, currentValue) => accumulator + currentValue;

const total = arr.reduce(sum, 0);

console.log(total); // 21
```

## More reduce() usages

Let's see how to reverse a string or words. Or you could use `reverse()` method instead.

```js
const str = "hello world";

const reversed = str.split("").reduce((revStr, currChar) => {
	return currChar + revStr;
}, "");

// Use spread operator
const reversed = [...str].reduce((revStr, currChar) => {
	return currChar + revStr;
}, "");

console.log(reversed);
// Output: dlrow olleh
```

Let's flatten an array of arrays. You can set initialValue to equal an empty array, `[]`. This is like how you would set up `const res = []`.

Or you could use `flat()` function instead. You can read more on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```js
const arrays = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const flattened = arrays.reduce((res, currArr) => {
	return res.concat(currArr);
}, []);
console.log(flattened);
// Output: [1, 2, 3, 4, 5, 6]
```

Keep this in mind, the method above only can flat these sub-arrays, but not these arrays inside of sub-arrays. If 4 and 6 are arrays, we will need to use a recursive approach.

```js
const arrays = [
	[1, 2],
	[3, [4]],
	[5, [6]],
];

const flatten = (arr) => {
	return arr.reduce((res, curr) => {
		if (Array.isArray(curr)) {
			return res.concat(flatten(curr));
		}
		return res.concat(curr);
	}, []);
};

const flattened = flatten(arrays);
console.log(flattened);
// Output: [1, 2, 3, 4, 5, 6]
```

Let's group array elements by a property.

```js
const people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 23 },
	{ name: "Charlie", age: 25 },
	{ name: "Elijah", age: 32 },
	{ name: "Ellen", age: 35 },
];

const groupedByAge = people.reduce((acc, object) => {
	const age = object.age;
	acc[age] = acc[age] || [];
	acc[age].push(object);
	return acc;
}, {});

console.log(groupedByAge);
// output
// {
//   '23': [ { name: 'Bob', age: 23 } ],
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '32': [ { name: 'Elijah', age: 32 } ],
//   '35': [ { name: 'Ellen', age: 35 } ]
// }
```

Let's count the frequency of array elements.

```js
const letters = ["a", "b", "c", "a", "b", "a"];

const frequency = letters.reduce((res, currLetter) => {
	// you could add console.log(res) here to see how it runs each step
	res[currLetter] = res[currLetter] ? res[currLetter] + 1 : 1;
	return res;
}, {});

// without ternary operator
const frequency = letters.reduce((res, currLetter) => {
	if (res[currLetter]) {
		res[currLetter] += 1;
	} else {
		res[currLetter] = 1;
	}

	return res;
}, {});

console.log(frequency);
// output
// { 'a': 3, 'b': 2, 'c': 1 }
```

## Recap

The reduce method is a higher-order function in JavaScript that allows you to reduce an array into a single value based on the defined operation. The reduce function takes 4 arguments, `accumulator`, `currentValue`, `currentIndex`(optional), and `array`(optional) with `initialValue`, and also can simplify the code.

```js
array.reduce((accumulator, currentValue, currentIndex, array) => {
	// do something
}, initialValue);
```

The `reduce()` method is a powerful and flexible feature in JavaScript that lets you perform a wide range of operations on arrays, such as filtering, mapping, and grouping elements. It's a concise way to write code that can perform complex operations, but it can be difficult to read or understand if you're not familiar with it.

Overall, `reduce()` is a useful method that can save you time and effort, but it's important to use it wisely and with a clear understanding of its strengths and weaknesses.

## Resources

- [reduce() - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [flat() - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

## Thank you!

Thank you for your time and for reading this!
