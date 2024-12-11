---
title: "TypeScript Utility Types - Extract"
description: "Explore the power of TypeScript’s Extract utility type. Learn how it enhances flexibility and maintainability by extracting specific members from union types."
date: 2023-12-13
tags: [typescript]
---

## What is Extract?

The Extract utility type in TypeScript is used to construct a new type by extracting members from a union type that matches a certain criterion. In short, it is only getting a couple of specific values that you need.

```ts
type Extract<T, U> = T extends U ? T : never;
```

## How Does Extract Work?

- Example of extracting specific keys from a union:

```ts
type Role = "ADMIN" | "MANAGER" | "USER";
type RoleExtracted = Extract<Role, "ADMIN" | "MANAGER">;
```

- Example of extracting function types from a union:

```ts
type Args = string | number | (() => string) | (() => number);
type FunctionArgs = Extract<Args, Function>;
```

## Recap

The `Extract` utility type is a tool in TypeScript that allows you to create a new type by extracting specific members from a union type. It can be useful when you want to work with a subset of a union type. This makes your TypeScript code more flexible and maintainable by allowing you to work with specific subsets of a union type. Whether you’re pulling out specific keys from a union of literal types or extracting function types from a union of various types, `Extract` provides a way to refine and constrain your types as needed.

## Resources

[TS Handbook - Extract](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union)

## Thank you!

Thank you for your time and for reading this!
