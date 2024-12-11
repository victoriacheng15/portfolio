---
title: "TypeScript Utility Types - NonNullable"
description: "Explore how TypeScript’s NonNullable utility type enhances type safety by excluding null and undefined from variables, object properties, and array elements."
date: 2023-12-20
tags: [typescript]
---

## What is NonNullable?

The NonNullable is a utility type that creates a type by excluding `null` and `undefined` from the given type. It is useful in situations where you want to ensure that a variable or property cannot be `null` or `undefined`.

```ts
type NonNullable<T> = T & {};
```

## How Does NonNullable Work?

```ts
type AllTypes = string | number | null | undefined;
const isDefined: AllTypes = undefined;

type NoNulls = NonNullable<AllTypes>;
const isDefined2: NoNulls = null; // this is not allowed
```

In the above code, `AllTypes` can be a string, a number, null, or undefined. But `NoNulls`, which is `NonNullable<AllTypes>`**,** can only be a string or a number. It cannot be null or undefined.

Let’s see an example with the object:

```ts
type MyObject =
	| {
			name: string | null;
			age: number | undefined;
	  }
	| null
	| undefined;

type NonNullsObject = NonNullable<MyObject>;
// { name: string | null; age: number | undefined; }
```

In this case, `NonNullsObject` is an object type that cannot be null or undefined, but its properties `name` and `age` can still be null or undefined.

If you want to make the properties of an object non-nullable, you would have to do that individually for each property:

```ts
type MyObject = {
	name: NonNullable<string | null>;
	age: NonNullable<number | undefined>;
};
```

Let’s see an example with the array:

```ts
type MyArray = (string | null)[] | null | undefined;

type NonNullsArray = NonNullable<MyArray>; // (string | null)[]
```

In this case, `NonNullsArray` is an array type that cannot be null or undefined, but its elements can still be null.

If you want to ensure that an array doesn't contain `null` values, you can apply the `NonNullable` utility type at the element level:

```ts
type MyArray2 = Array<NonNullable<string | null>>; // string[]
```

## Recap

In TypeScript, the `NonNullable` is a utility type that excludes null and undefined from a given type. It’s used to ensure that a variable or property cannot be null or undefined. This applies to simple types, objects, and arrays. However, for objects and arrays, `NonNullable` operates on the type level, not on the property or element level. So, to make object properties or array elements non-nullable, you need to apply `NonNullable` directly to each property or element type.

## Resources

[TS Handbook - NonNullable](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)

## Thank you!

Thank you for your time and for reading this!
