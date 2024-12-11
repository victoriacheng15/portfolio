---
title: "TypeScript Utility Types - Pick"
description: "Pick is a TypeScript utility type that allows selecting specific properties from an object type, simplifying type declarations."
date: 2023-08-02
tags: [typescript]
---

## What is Pick?

The **`Pick`** utility type in TypeScript allows you to create a new type by selecting specific properties from an existing type. It is useful when you want to extract only certain properties from an object type and create a new type containing just those selected properties.

```ts
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
```

## How does Pick work?

Imagine you are building a React application, and you want to create a user card component that displays basic information, such as username and email, for users fetched from the **`https://jsonplaceholder.typicode.com/users`** API. Each user card should be clickable, leading to a more detailed page displaying additional information, such as the user's name and address.

We can declare `User` type like below.

```ts
interface User {
	id: number;
	name: string;
	email: string;
	username: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
}
```

To create the user card component, we only require three pieces of information: the **`id`** (used as a key prop), **`username`**, and **`email`**. We'll define a **`UserCard`** type to represent this structure.

```ts
type UserCard = Pick<User, "id" | "username" | "email">;
```

This type will help us ensure the any data used for rendering the user card component contains these specific properties and display relevant information.

## Recap

Hovering the cursor to `UserCard` after copying and pasting the code below to the editor, you will see the `UserCard` will display the 3 properties, `id`, `username`, and `email`.

```ts
interface User {
	id: number;
	name: string;
	email: string;
	username: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
}

type UserCard = Pick<User, "id" | "username" | "email">;
```

In general, the **`Pick`** utility type serves as a valuable tool, enabling you to select specific properties tailored to your component's requirements, without the need to repeatedly rewrite those properties. It streamlines the process of cherry-picking essential properties, ensuring code efficiency and avoiding redundant declarations.

## Resources

[TS Handbook - Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)

## Thank you!

Thank you for your time and for reading this!
