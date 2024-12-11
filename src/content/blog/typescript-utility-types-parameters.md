---
title: "TypeScript Utility Types - Parameters"
description: "Parameters utility in TypeScript extracts expected function arguments, aiding developers in understanding and working with parameter types."
date: 2024-01-02
tags: [typescript]
---

## What is Parameters?

It is a built-in utility type that extracts the parameter types of a function. It accepts a function type as input and gives back a tuple type that lists the parameter types of the function.

```ts
type Parameters<T extends (...args: any) => any> =
	T extends (..args: infer P) => any ? P: never
```

## How Does Parameters Work?

```ts
function myFunc(a: string, b: number, c: boolean) {
	//...
}

type myParams = Parameters<typeof myFunc>;
// [a: string, b: number, c: boolean]
```

- Parameters Utility Type:
  - `Parameters<Type>` extracts parameter types from a function type `Type`.
  - Applied to `myFunc`, it gives `[string, number, boolean]`.
- typeof Operator:
  - `typeof myFunc` gets the type of the function.
- Result:
  - `myParams` is a type representing `myFunc`'s parameter types.
  - It's a tuple: `[a: string, b: number, c: boolean]`.

You also can extract one item like you would with arrays.

```ts
type LastParam = Parameters<typeof myFunc>[2];
// boolean
```

The syntax `Parameters<typeof myFunc>[2]` gets the third element (a boolean) from the array of parameter types.

## Recap

The Parameters utility type in TypeScript is a valuable tool, allowing developers to extract a function's parameter types and gain insights into the anticipated arguments that the function is designed to handle.

## Resources

[TS Handbook - Parameters](https://www.typescriptlang.org/docs/handbook/utility-types.html?#parameterstype)

## Thank you!

Thank you for your time and for reading this!
