---
title: "TypeScript Utility Types - Record"
description: "Record in TypeScript: Defines fixed-key objects with specific value types."
date: 2023-09-13
tags: [typescript]
---

## What is Record?

The `Record` utility type is designed to help you define objects with a specific set of keys and their corresponding value types. This is particularly useful when you want to create structured data objects or dictionaries where you know in advance what keys will be present and what types of values they should hold.

```ts
type Record<K extends string | number | symbol, T> = {
	[P in K]: T;
};
```

The syntax for using the `Record` type is as follows:

```ts
type MyRecord = Record<keys, value>;
```

- `MyRecord`: Name of the type you're defining.
- `Keys`: Represents the keys in the resulting object, which should be string literal types or string union types.
- `Value`: The type corresponding to values associated with each key.

## How does Record work?

Before we move onto examples, when you see `string | number`, it is a type union. A type union is used to specify that a value can have one of several possible types. In this case of `string | number`, it means that a variable can be either a string or a number.

- Without specifying key values:

```ts
type User = Record<string, string | number>;

const user: User = {
	name: "Mia",
	email: "mia@example.com",
	age: 25,
	gender: "female",
};
```

- With specifying key values such as name, age, email and etc:

```ts
type User = Record<"name" | "age" | "email", string | number>;

const user: User = {
	name: "Mia",
	email: "mia@example.com",
	age: 30,
};
```

- Nested Records:

```ts
type Address = Record<"street" | "city", string>;
type User = Record<"name" | "age" | "address", string | number | Address>;

const user: User = {
	name: "Mia",
	age: 30,
	address: {
		street: "123 Main St",
		city: "Anytown",
	},
};
```

## Recap

When you copy the provided code snippet below, and then hover your mouse to `User`, `User2`, and `User3` to see what it says on the pop-up window.

1. **User**: It will say `[x: string]: string | number`. This means it's an object with any string keys and values that are either strings or numbers. It doesn't enforce specific keys like `name`, `age`, or `email`.
2. **User2**: It will say 3 properties of `name`, `age`, and `email` with string and number values. This type explicitly defines the keys and their value types.
3. **User3**: It will say 3 properties of `name`, `age`, and `address` with string, number, and address values. This type defines the keys and allows the `address` property to hold values of a nested structure defined by the `Address` type.

```ts
type User = Record<string, string | number>;

type User2 = Record<"name" | "age" | "email", string | number>;

type Address = Record<"street" | "city", string>;
type User3 = Record<"name" | "age" | "address", string | number | Address>;
```

## Resources

- [TS Handbook - Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)

## Thank you!

Thank you for your time and for reading this!
