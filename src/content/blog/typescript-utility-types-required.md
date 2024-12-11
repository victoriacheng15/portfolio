---
title: "TypeScript Utility Types - Required"
description: "Required: TypeScript utility making all object properties mandatory. Enhance type safety."
date: 2023-09-06
tags: [typescript]
---

## What is Required?

The `Required` type in TypeScript is a built-in type that allows you to transform object types by making all of their properties required. This means that any property marked as optional (with the `?` modifier) in the original object type will become mandatory in the resulting type. This is useful when you want to enforce that certain properties must always be present in an object.

```ts
type Required<T> = {
	[P in keyof T]-?: T[P];
};
```

## How does Required work?

In the provided code snippet, we define an object of type `Form` with certain properties marked as optional using the `?` modifier. This means that when updating the `userData` object, it's possible to modify either one or both of these properties, offering flexibility in the update process

```ts
interface Form {
	name?: string;
	email?: string;
	message?: string;
}

const userData: Form = {
	name: "Isabella",
	email: "Isabella@gmail.com",
	message: "A message without Required",
};

function updateUserName(newData: Form, updates: Form) {
	return {
		...newData,
		...updates,
	};
}

const updatedUserData = updateUserName(userData, { name: "Emma" });
console.log(updatedUserData);

// {
//   name: 'Emma',
//   email: 'Isabella@gmail.com',
//   message: 'A message without Required'
// }
```

Imagine a scenario where you need to update all the user information. In such cases, you can leverage the built-in `Required` type.

```ts
function updateAllData(newData: Form, updates: Required<Form>) {
	return {
		...newData,
		...updates,
	};
}

const newUserData = {
	name: "Olivia",
	email: "Olivia@example.com",
	message: "new message with Required",
};

const updatedAllUserData = updateAllData(userData, newUserData);
console.log(updatedAllUserData);

// {
//   name: 'Olivia',
//   email: 'Olivia@example.com',
//   message: 'new message with Required'
// }
```

## Recap

At times, it's beneficial to begin with all properties marked as optional for flexibility. However, in specific situations, you may find the need to enforce that all properties become mandatory. In such cases, you can utilize the built-in 'Required' type

When you copy the provided code snippet and hover your mouse over **`Form`**, you'll see that the 'name' property is described as **`string | undefined`**. Furthermore, if you hover your mouse over **`AllRequired`**, you'll observe that the optional modifier has been removed.

```ts
type Form = {
	name?: string;
	email?: string;
	message?: string;
};

type AllRequired = Required<Form>;
```

## Resources

- [TS Handbook - Required](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)

## Thank you!

Thank you for your time and for reading this!
