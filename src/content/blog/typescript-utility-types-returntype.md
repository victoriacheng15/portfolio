---
title: "TypeScript Utility Types - ReturnType"
description: "Empower your TypeScript coding with ReturnType utility. Dive into examples for sharper function return type inference and fortified type safety."
date: 2024-02-20
tags: [typescript]
---

## What is ReturnType?

In TypeScript, `ReturnType<Type>` is a utility type that allows developers to extract the return type of a function or a callable object. This utility type is particularly useful in situtations where you want to capture and work wih the specific type that a function is expected to return, without having to annotate it.

```ts
type ReturnType<T extends (...args: any) => any> =>
		T extends (...args: any) => infer R ? R : any
```

## How does ReturnType work?

Example 1: return the type of a function returning a number

```ts
function getNumber(): number {
	return 42;
}

type NumberReturnType = ReturnType<typeof getNumber>;
// NumberReturnType = number
```

Example 2: return the type of a function returning an object

```ts
function getObject(): { name: string; age: number; isMarried: boolean } {
	return { name: "John", age: 30, isMarried: false };
}

type ObjectReturnType = ReturnType<typeof getObject>;
// ObjectReturnType = { name: string; age: number; isMarried: boolean }
```

Example 3: return the type of a function returning an array

```ts
function getArray(): number[] {
	return [1, 2, 3, 4, 5];
}

type ArrayReturnType = ReturnType<typeof getArray>;
// ArrayReturnType = number[]
```

## Recap

TypeScript's type inference system automatically deduces types in various coding scenarios, allowing developers to write code with fewer explicit type annotations. However, there are cases where explicit type annotations prove beneficial:

1. **Function Return Types:** Improves code clarity and documentation, necessary when TypeScript can't infer accurately.
2. **Complex Object Structures:** Ensures TypeScript understands intricate object structures in function parameters or return values.
3. **Variables with Ambiguous Types:** Reduces confusion for variables with potentially multiple types.
4. **Interfaces and Custom Types:** Vital for defining the shape and structure of custom types or interfaces.

Example 1:
The function is designed to return a number, and in this particular instance, there is no need to explicitly specify the return type.

```ts
function getNumber() {
	return 42;
}

type NumberReturnType = ReturnType<typeof getNumber>;
// NumberReturnType = number
```

Example 2:
In certain scenarios, if you receive an array with numbers as input and intend to produce an array with strings as output, it becomes necessary to explicitly specify that the array will have a string type instead of numbers.

```ts
function getArray(...arr: number[]): string[] {
	return [...arr].map(String);
}
type ArrayReturnType = ReturnType<typeof getArray>;
// ArrayReturnType = string[]
```

Example 3:
Consider a scenario where we have a function named `fetchUsers` responsible for retrieving user data from an API. The API, in this case, returns data with complex type structures. It becomes essential to explicitly specify the expected object shape to TypeScript, ensuring accurate interpretation of the API response.

```ts
async function fetchUsers(): Promise<
	Array<{
		name: string;
		isMarried: boolean;
		address: { street: string };
	}>
> {
	const response = await fetch("https://api.example.com/user");
	const data = await response.json();
	return data;
}

type UserReturnType = ReturnType<typeof fetchUsers>;
// UserReturnType = Promise<{
//    name: string;
//    isMarried: boolean;
//    address: { street: string };
// }[]>
```

## Resources

[TS Handbook - ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)

## Thank you!

Thank you for your time and for reading this!
