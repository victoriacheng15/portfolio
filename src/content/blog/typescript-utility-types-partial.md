---
title: "TypeScript Utility Types - Partial"
description: "Discover the power of TypeScript partial usage. Learn how to efficiently narrow down and limit object properties in just a few steps."
date: 2023-07-19
tags: [typescript]
---

## What is Partial?

The `Partial` is a built-in utility type that allows you to create a new type by making all properties of an existing type optional. It means that every property in the new type can be present or omitted, regardless of its original required or optional status. This utility type helps you work with partially filled or mutable objects.

```ts
type Partial<T> = {
	[P in keyof T]?: T[P];
};
```

You can view this by hovering cursor on `Partial` and a pop-up will show up.

## How does Partial work?

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

const original = {
	title: "Organize desk",
	description: "Clear clutter",
	completed: false,
};
```

Let’s say you have a list of todos and you would declare `Todo` with title as string, description as string, and completed as boolean. You also define the `original` object with all necessary properties as the `Todo` interface.

```ts
function updateTodo(todo: Todo, fieldsToUpdate: Todo) {
	return { ...todo, ...fieldsToUpdate };
}

const updateStatus = updateTodo(original, {
	completed: true,
});
```

If you write `fieldToUpdate: Todo` in the function above and try to update the status for one of the todos, TypeScript will let you know that there is an error of `Argument of type '{ completed: true; }' is not assignable to parameter of type 'Todo'. Type '{ completed: true; }' is missing the following properties from type 'Todo': title, description`. This is to tell you that you are missing the `title` and `description`.

```ts
interface Todo {
	title?: string;
	description?: string;
	completed?: boolean;
}
```

You could add the optional property for all types, but these types also are the required inputs that you need for the Todo app.

This is where `Partial` comes in!

```ts
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}

const updateStatus = updateTodo(original, {
	completed: true,
});

console.log({ original, updateStatus });
```

You write `fieldsToUpdate: Partial<Todo>` and now you can update one of the properties!

## Full Code

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}

const original = {
	title: "Organize desk",
	description: "Clear clutter",
	completed: false,
};

const updateStatus = updateTodo(original, {
	completed: true,
});

console.log({ original, updateStatus });
```

## Recap

```ts
type Todo = {
	title: string;
	description: string;
	completed: boolean;
};

type HoverPartial = Partial<Todo>;
```

If you try to hover the cursor over `Todo` and it will show all types without the optional property, while `HoverPartial` will show the optional property and undefined, like `title?: string | undefined;`.

The `Partial` utility provides flexibility and convenience in TypeScript by allowing you to work with objects or function arguments in a more relaxed manner. It promotes code reusability, readability, and adaptability, especially in scenarios where not all properties or arguments are required or known in advance.

## Resources

- [TS Handbook - Partial](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)

## Thank you!

Thank you for your time and for reading this!
