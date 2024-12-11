---
title: "JavaScript - Logical AND Assignment Operator"
description: "Logical AND assignment (&&=) in programming: Efficiently update variables based on conditions."
date: 2023-10-11
tags: [javascript]
---

## What is the logical AND assignment operator?

In JavaScript, the logical AND assignment operator (**`&&=`**) is a tool for updating variables based on conditions. It combines the logical AND operation with assignment in a concise manner. It only evulates the right operand and assigns to the left if the **left operand** is truthy.

```js
let x = 5;
let y = 3;

x &&= y;

console.log(`x is ${x}`); // x = 3
```

If x is considered true, then the x value will become 3, which is a value of y.

```js
let x = 0;
let y = 3;

x &&= y;

console.log(`x is ${x}`);
x = 0;
```

If x is considered false, then the x value will stay 0, which is its original value.

## Examples

- Example 1:

```js
let message = "Hello, ";
let name = "Alice";

message &&= name;

console.log("message: ", message); // Output: "Alice"
```

- Example 2:

```js
let isEnabled = true;
let userLoggedIn = false;

isEnabled &&= userLoggedIn;

console.log("isEnabled: ", isEnabled); // Output: false
```

- Example 3:

```js
let numbers = [1, 2, 3];
let newNumber = 200;

numbers &&= [newNumber, ...numbers];

console.log("numbers: ", numbers); // Output: [200, 1, 2, 3]
```

- Example 4:

```js
let person = {
	name: "John",
	age: 30,
};

let additionalInfo = {
	country: "USA",
	job: "Engineer",
};

person &&= { ...person, ...additionalInfo };

console.log(person);
/* Output:
{
  name: "John",
  age: 30,
  country: "USA",
  job: "Engineer"
}
*/
```

## Recap

You can make use of `Boolean(input)` to ascertain its truthiness. If the left operand is deemed true, the variable will adopt the value of the right operand. It's worth noting that even empty arrays and objects are evaluated as true; this is why the variable will consistently incorporate the value from the right operands.

## Resources

[MDN Docs - Logical AND assignment (&&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)

[What are logical assignment operators in JavaScript? - The &&= operator](https://www.educative.io/answers/what-are-logical-assignment-operators-in-javascript)

## Thank you!

Thank you for your time and for reading this.
