---
title: JavaScript - Optional Chaining Operator
description: "JS optional chaining operator (?.) is a safe way to access nested object properties, even if the property doesn't exist."
date: 2023-06-07
tags: [javascript]
---

## What is Optional Chaining Operator (?.)?

It was introduced in ES2022 and is an operator that accesses an object’s property or calls a function. If the object or the function was accessed with this operator, the expression short circuits and evaluates to undefined instead of throwing an error.

```js
obj.val?.prop;
obj.val?.[expr];
obj.func?.(args);
```

It is a useful feature in JavaScript for handling situations where you need to access nested properties or methods on an object, but there is a possibility of encountering null or undefined values along the chain. Here are some common use cases for this operator:

- Accessing nested properties
- Calling methods on optional objects
- Conditional rendering in UI
- API responses and data manipulation
- Error Handling

## Examples

- Access nested properties

```js
const user = {
	id: 1,
	name: "John",
	address: {
		city: "New York",
		zipcode: "10001",
	},
};

const city = user?.address?.city;
const country = user?.address?.country;

console.log(city); // output: New York
console.log(country); // output: undefined
```

- Calling methods on optional objects

```js
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				data: {
					users: [
						{ id: 1, name: "John" },
						{ id: 2, name: "Jane" },
					],
				},
			});
		}, 1000);
	});
};

fetchData()
	.then((response) => {
		response?.data?.users?.forEach((user) => {
			console.log(user.name);
		});
	})
	.catch((error) => console.error(error));
```

- Conditional rendering in UI

There are 2 options for this. First, `<p>Country: {user?.address?.country ?? "N/A"}</p>` will be rendering `N/A` if the `country` property doesn't exist. Secondly, `user?.address?.country && <p>Country: {user?.address?.country}</p>}` will not render if the `country` property doesn't exist.

```js
import React from "react";

const UserProfile = () => {
	const user = {
		id: 1,
		name: "John",
		address: {
			city: "New York",
			zipcode: "10001",
			// country: "Somewhere",
		},
	};

	return (
		<div>
			<h1>Welcome, {user.name}!</h1>
			<p>City: {user?.address?.city}</p>
			<p>Country: {user?.address?.country ?? "N/A"}</p>
			{user?.address?.country && <p>Country: {user?.address?.country}</p>}
		</div>
	);
};
```

- API responses and data manipulation

```js
const apiResponse = {
	data: {
		user: {
			id: 1,
			name: "John",
			orders: [
				{ id: 1, product: "Phone", quantity: 2 },
				{ id: 2, product: "Laptop", quantity: 1 },
			],
		},
	},
};

const orders = apiResponse?.data?.user?.orders;
if (orders) {
	orders.forEach((order) => {
		console.log(`Order: ${order.id}, Product: ${order.product}`);
	});
}
```

- Error handling

```js
const user = null;

const name = user?.name || "Unknown User";
console.log(name); // output: Unknown User

const city = user?.address?.city ?? "No City Found";
console.log(city); // output: No City Found
```

Remember, there is a pitfall in using nullish coalescing operator. If the value from the API or somewhere else is evaluated in the Boolean context, nullish coalescing operator would return left-hand operand. If you know in advanced that the value is either null or undefined, the nullish coalescing operator can be used, otherwise, use the logical OR operator instead

## Extra

Let’s say you have 2 functions inside of the user object, one of them is existed while another one doesn’t exist. The optional chaining is an operator, but also not an operator. It is a special syntax construct.

For function, you can write it like `user.admin?.()`, if it exists, it will return a value, otherwise it returns undefined

```js
const user = {
	admin() {
		return "I am an admin";
	},
};

console.log(user.admin?.()); // output: I am an admin

// try copy and paste below to editor and see what the terminal shows you
console.log(user.admin1()); // this raise TypeError
console.log(user.admin1?.()); // this will return undefined
```

## Recap

The optional chaining operator is an awesome feature that simplifies code and reduces the need for ternary operators or if statements. It provides a concise way to handle situations where certain properties may not exist, especially when working with APIs. By using optional chaining, you can navigate through object properties and gracefully handle cases where properties are missing or undefined, making your code more readable and easier to maintain.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank" rel="noopener noreferrer">MDN Docs - Optional Chaining</a>
- <a href="https://victoriacheng15.vercel.app/posts/nextjs-state-management-with-redux-toolkit-part-1" target="_blank" rel="noopener noreferrer">JS Info - Optional Chaining</a>

## Thank you!

Thank you for your time and for reading this!
