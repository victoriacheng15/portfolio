---
title: TypeScript Utility Types - Awaited
description: "Let's deep dive into how Awaited works and what are the differences between Awaited and Promise"
date: 2023-05-31
tags: [typescript]
---

## What is Awaited?

> Note: I would like to remind you that I am writing a series on TypeScript utility types to enhance my understanding of TypeScript and its utility types. If you come across any incorrect information, please don't hesitate to let me know!

The term `Awaited` refers to one of the utility types in TypeScript. It is used to extract the type of value that a promise will eventually return, rather than the promise object itself. This utility type allows us to avoid using the `.then()` method repeatedly and instead await the promise directly.

## Let's see how Awaited works

Let's fetch the users data from the `JSONPlaceholder`.

```ts
interface User {
	id: number;
	name: string;
}
```

First, we define types for users data and let's keep this simple, we will define types for id and name.

```ts
async function getUsers(): Promise<User[]> {
	const url = "https://jsonplaceholder.typicode.com/users";
	const res = await fetch(url);
	return res.json();
}
```

The `getUsers` function asynchronously fetches data from the URL, and returns a Promise that resolves to the parsed JSON data with an array of `User` objects.

```ts
type Users = Awaited<ReturnType<typeof getUsers>>;
// type Users1 = Awaited<Promise<User[]>>;

(async function processData() {
	const users: Users = await getUsers();
	console.log(users.slice(0, 2));
})();
```

To define the `Users` type, there are two ways:

1.  Using `ReturnType` and `Awaited`

```ts
type Users = Awaited<ReturnType<typeof getUsers>>;
```

This line defines the `Users` type by using the `ReturnType` utility type to extract the return type of the `getUsers` function. It then applies the `Awaited` utility type to that return type. The `Awaited` utility type is used to indicate that the type being awaited is a promise. Ultimately, `Users` will represent an array of User objects.

1. Using `Awaited` directly:

```ts
type Users = Awaited<Promise<User[]>>;
```

This line defines the `Users` type by using the `Awaited` utility type directly on the `Promise<User[]>` type. It indicates that the awaited result is a promise, and the promised value is an array of `User` objects.

In both cases, the `Users` type represents an array of `User` objects. The `typeof` keyword works similarly to how you would retrieve the type of a variable in JavaScript. In this context, it returns the type of `getUsers`, which is `User[]`.

## Extra

A couple of examples that I was playing around with `Awaited`, `Promise`, and `ReturnType` to declare types for each.

```ts
type ShowString = Awaited<Promise<string>>;
// type ShowString = string
type ShowNumber = Awaited<ReturnType<() => number>>;
// type ShowNumber = number
type ShowBooleanAndNumber = Awaited<boolean | Promise<number>>;
// type ShowBooleanAndNumber = number | boolean
type ShowPromiseType = Awaited<ReturnType<() => Promise<number>>>;
// type ShowPromiseType = number
```

## Example Code

```ts
interface User {
	id: number;
	name: string;
}

async function getUsers(): Promise<User[]> {
	const url = "https://jsonplaceholder.typicode.com/users";
	const res = await fetch(url);
	return res.json();
}

type Users = Awaited<ReturnType<typeof getUsers>>;
// type Users1 = Awaited<Promise<User[]>>;

(async function processData() {
	const users: Users = await getUsers();
	console.log(users.slice(0, 2));
})();
```

## Recap

```ts
type MyPromise = Promise<number>;
type MyAwaited = Awaited<MyPromise>;
```

To keep this simple, `Promise` will return the promise object of whichever type you define, while `Awaited` will extract the type from the `Promise`. You can check this by hovering the mouse on `MyPromise` and `MyAwaited`. You would see the pop-up window saying `type MyPromise = Promise<number>` and `type MyAwaited = number` respectively.

## Resources

- <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype" target="_blank" rel="noopener noreferrer">TS Handbook - Awaited Utility Type</a>
- <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype" target="_blank" rel="noopener noreferrer">TS Handbook - ReturnType Utility Type</a>

## Thank you!

Thank you for your time and for reading this!
