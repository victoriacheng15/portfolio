---
title: "TypeScript Utility Types - Readonly"
description: "Readonly utility type in TypeScript ensures immutability for specific properties, preventing accidental modifications."
date: 2023-08-09
tags: [typescript]
---

## What is Readonly?

The `readonly` modifier in TypeScript is a powerful tool that enables you to create immutable object types. By applying `readonly` to specific properties within a type, you designate them as read-only, meaning their values cannot be altered or reassigned after their initial assignment.

```ts
type Readonly<T> = {
	readonly [P in keyof T]: T[P];
};
```

## How does Readonly work?

Consider a scenario where you have a crucial configuration object, and it is most important that one of its properties remains unchangeable.

```ts
interface Configuration {
	apiKey: string;
	serverUrl: string;
}

const config: Configuration = {
	apiKey: "abc123",
	serverUrl: "https://api.example.com",
};

config.apiKey = "def456"; // can change
config.serverUrl = "https://api.example.com/v2"; // can change
```

With the provided code snippet, it allows anyone to change both properties of the object, which might not be desirable. This is where `Readonly` utility type comes to the rescue. By using `Readonly`, you can ensure that specific properties of an object become read-only, preventing any modification after their initial assignment.

```ts
interface Configuration {
	apiKey: string;
	serverUrl: string;
}

const config: Readonly<Configuration> = {
	apiKey: "abc123",
	serverUrl: "https://api.example.com",
};

config.apiKey = "def456"; // cannot change
config.serverUrl = "https://api.example.com/v2"; // cannot change
```

## Recap

```ts
interface Configuration {
	apiKey: string;
	serverUrl: string;
}

type CantChange = Readonly<Configuration>;

// or
interface Configuration {
	readonly apiKey: string;
	readonly serverUrl: string;
}
```

By employing `Readonly`, you transform the object into a read-only structure, safeguarding critical data from unintended alterations by other parts of the code. This immutability ensures that the important information within the object remains constant throughout its lifetime, enhancing code reliability and stability.

## Resources

[TS Handbook - Readonly](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)

## Thank you!

Thank you for your time and for reading this!
