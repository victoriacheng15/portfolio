---
title: JavsScript - What is StructuredClone?
description: "Shallow vs. deep copy in objects: shallow copies reference, deep copies the object. Use reference for shallow, recursively duplicate for deep copy."
date: 2023-02-01
tags: [javascript]
---

## What is structuredClone()?

It is a method that creates a deep copy of a given value using the structured clone algorithm and without using a 3rd-party library like Lodash. This makes it much easier for developers to transfer data between different applications without having to worry about compatibility issues.

Before we go on structuredClone, let's learn about the differences between shallow copy and deep copy!

## Shallow Copy vs Deep Copy

There are 2 types of clone methods, shallow copy and deep copy. Let's see what are the differences between them.

### Shallow Copy

A `shallow copy` creates a reference to the original object rather than creating a new copy of the object's data. You can use `spread operator` or `Object.assign` or `clone()` from Lodash.

```js
const original = {
	hello: "world",
	motto: "it is so awesome",
	address: {
		province: "Awesome Province",
	},
};

const copied = { ...original };

console.log("original", original);
console.log("copied", copied);
```

```js
// output
original {
  hello: 'world',
  motto: 'it is so awesome',
  address: { province: 'Awesome Province' }
}
copied {
  hello: 'world',
  motto: 'it is so awesome',
  address: { province: 'Awesome Province' }
}
```

```js
original.motto = "This only change the ____original____ object";
```

As long as the properties are 1 level deep when the change is made to either `original` or `copied`, they keep their values.

```js
// output
original {
  hello: 'world',
  motto: 'This only change the ____original____ object',
  address: { province: 'Awesome Province' }
}
copied {
  hello: 'world',
  motto: 'it is so awesome',
  address: { province: 'Awesome Province' }
}
```

```js
original.motto = "This only change the ____original____ object";
copied.motto = "This only change the ____copied____ object";
```

As the screenshot shows, both mottos are changed, and they don't affect each other.

```js
// output
original {
  hello: 'world',
  motto: 'This only change the ____original____ object',
  address: { province: 'Awesome Province' }
}
copied {
  hello: 'world',
  motto: 'This only change the ____copied____ object',
  address: { province: 'Awesome Province' }
}
```

```js
original.address.province = "Original Province, this changes both objects";
```

The province property is 2 levels deep and remembers a shallow copy creates an object with the same reference to the original object. This is why when the province is changed, both objects will have the same value.

```js
// output
original {
  hello: 'world',
  motto: 'This only change the ____original____ object',
  address: { province: 'Original Province, this changes both objects' }
}
copied {
  hello: 'world',
  motto: 'This only change the ____copied____ object',
  address: { province: 'Original Province, this changes both objects' }
}
```

### Deep Copy

A `deep copy` creates a completely new copy of the entire object, including any nested objects, and any changes to the copied object will not affect the original object. There are 2 ways, use `JSON.parse(JSON.stringify(obj))` or `cloneDeep()` from Lodash. Now, `structuredClone()` can be used.

```js
const obj = {
	hello: "world",
	a: {
		b: "b",
		c: "c",
	},
};

const original = {
	a: new Date(),
	b: NaN,
	c: new Function(),
	d: undefined,
	e: function () {},
	f: Number,
	g: false,
	h: Infinity,
	i: obj,
};
```

The `JSON.parse(JSON.stringify(obj))` has unexpected consequences. The `original` object will lose any JavaScript property that has no equivalent type in JSON, like Function or Infinity.

```js
const cloned = JSON.parse(JSON.stringify(original));

console.log("original", original);
console.log("cloned", cloned);
```

```js
//output
original {
  a: 2023-03-10T16:22:18.280Z,
  b: NaN,
  c: [Function: anonymous],
  d: undefined,
  e: [Function: e],
  f: [Function: Number],
  g: false,
  h: Infinity,
  i: { hello: 'world', a: { b: 'b', c: 'c' } }
}
cloned {
  a: '2023-03-10T16:22:18.280Z',
  b: null,
  g: false,
  h: null,
  i: { hello: 'world', a: { b: 'b', c: 'c' } }
}
```

Now, `structuredClone` can be used to copy objects. Keep in mind, it doesn't support `Function` and there are supported types by the structured clone algorithm such as Array, Boolean and more. You can read more on the algorithm at [this link](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

```js
const obj = {
	hello: "world",
	a: {
		b: "b",
		c: "c",
	},
};

// Functions are not supported, which is why they are removed from this.
const original = {
	a: new Date(),
	b: NaN,
	d: undefined,
	g: false,
	h: Infinity,
	i: obj,
	j: [1, 2, 3, 4, 5],
};

const cloned = structuredClone(original);

console.log("original", original);
console.log("cloned", cloned);
```

```js
// output
original {
  a: 2023-03-10T16:25:35.312Z,
  b: NaN,
  d: undefined,
  g: false,
  h: Infinity,
  i: { hello: 'world', a: { b: 'b', c: 'c' } },
  j: [ 1, 2, 3, 4, 5 ]
}
cloned {
  a: 2023-03-10T16:25:35.312Z,
  b: NaN,
  d: undefined,
  g: false,
  h: Infinity,
  i: { hello: 'world', a: { b: 'b', c: 'c' } },
  j: [ 1, 2, 3, 4, 5 ]
}
```

```js
original.i.a.b = "hey";
cloned.i.a.b = "hey, I have changed!";
```

The `b` had "b" as the value before. With `structuredClone()`, both `original` and `copied` can have their values without affecting each other, unlike the shallow copy.

```js
// output
original {
  a: 2023-03-10T16:26:17.501Z,
  b: NaN,
  d: undefined,
  g: false,
  h: Infinity,
  i: { hello: 'world', a: { b: 'hey', c: 'c' } },
  j: [ 1, 2, 3, 4, 5 ]
}
cloned {
  a: 2023-03-10T16:26:17.501Z,
  b: NaN,
  d: undefined,
  g: false,
  h: Infinity,
  i: { hello: 'world', a: { b: 'hey, I have changed!', c: 'c' } },
  j: [ 1, 2, 3, 4, 5 ]
}
```

## Recap

A shallow copy of an object means that the copy has the same references to the properties of the original object. As a result, if one of the properties at two levels deep is modified, both the original and the copy will have the same new value. On the other hand, in a deep copy, the copy does not share references with the original object. This means that if a deeply nested property is changed, only that particular object will be affected and not the other.

It is advisable to use the `structuredClone()` method for creating a deep copy of an object, as it makes sure that the data types are preserved during the copying process. In contrast, using `JSON.parse(JSON.stringify(obj))` results in data type changes. If you prefer using Lodash, keep in mind that additional steps are required.

## Resources

- [MDN Docs - structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [MDN Docs - structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [MDN Docs - Shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
- [MDN Docs - Deep copy](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
- [Lodash - clone() and cloneDeep()](https://lodash.com/docs/4.17.15#clone)

## Thank you!

Thank you for your time and for reading this!
