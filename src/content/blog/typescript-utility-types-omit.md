---
title: "TypeScript Utility Types - Omit"
description: "Explore TypeScript's Omit utility type for precise property exclusions and enhanced type control."
date: 2023-10-04
tags: [typescript]
---

## What is Omit?

In TypeScript, the `Omit` utility type is a convenient tool for creating new types by excluding specific properties from an existing type. It allows you to take an object type and specify which properties you want to remove, effectively creating a new type that lacks those properties. This can be useful when you need to work with variations of data structures or when you want to ensure that certain properties are excluded from a type to meet specific requirements.

```ts
type Omit<T, K extends string | number | symbol> = {
	[P in Exclude<keyof T, K>]: T[P];
};
```

## How Does Omit Work?

Suppose you have a `Product` type that includes properties like `id`, `name`, `price`, and `category`. If you need to create a simplified product type that only requires `name` and `price`, you can utilize the `Omit` utility to exclude `id` and `category` from the `Product` type.

```ts
type Product = {
	id: number;
	name: string;
	price: number;
	category: string;
};

type SimplifiedProduct = Omit<Product, "id" | "category">;

const simplifiedProduct: SimplifiedProduct = {
	name: "Widget",
	price: 19.99,
	// No "id" and "category" properties allowed here
};
```

## Recap

The `Omit` utility type is commonly used in situations where you want to create a more refined type definition without duplicating code or manually specifying every property.

You might find this concept resembling one of the utility types called `Exclude`. While both `Exclude` and `Omit` serve the purpose of excluding or omitting specific elements from a set of types, they differ in their applications. `Exclude` is designed for working with type unions, whereas `Omit` is specifically used for omitting specific properties from a type.

## Resources

[TS Handbook - Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

[TypeScript Utility Types - Exclude](https://victoriacheng15.vercel.app/posts/typescript-utility-types-exclude)

## Thank you!

Thank you for your time and for reading this!
