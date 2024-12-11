---
title: "React Hooks - useRef"
description: "React's useRef hook: Handles mutable values & DOM interaction, curbs re-renders, boosts performance."
date: 2023-08-23
tags: [react]
---

## What is useRef?

The `useRef` hook in React is tailored for working with DOM elements and mutable values within functional components. Its key advantage is that it avoids unnecessary re-renders, boosting performance.

A major use case for `useRef` is obtaining direct references to DOM elements, which is useful for imperative operations like focusing inputs or working with external libraries. It also stores values across renders without causing re-renders, serving as a lightweight alternative to the useState.

```jsx
const ref = useRef(initialValue);

// examples
const counts = useRef(0);
const myValue = useRef(null);
```

## The difference between with and without useRef

<video src="https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/816a6e48-557f-45c8-bbc2-0f57ca007080" controls="controls" style="max-width: 730px;">
</video>

- without useRef - when clicking the button, the console will show 2 messages, `You clicked x times!` and `re-rendering`
- with useRef - - when clicking the button, the console will show 1 message, `You clicked x times!` only

## Example code

```jsx
import { useState, useEffect, useRef } from "react";

export default function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount((prevCount) => prevCount + 1);
		console.log(`You clicked ${count} times!`);
	}

	useEffect(() => {
		console.log("re-rendering");
	}, [count]);

	// let ref = useRef(0);

	// function handleClick() {
	// 	ref.current++;
	// 	console.log(`You clicked ${ref.current} times!`);
	// }

	// useEffect(() => {
	// 	console.log("re-rendering")
	// }, [ref])

	return <button onClick={handleClick}>Click me!</button>;
}
```

## Recap

The `useRef` hook is a tool in React for managing mutable values and interacting with the DOM within functional components. It shares similarities with `useCallback` and `useMemo` in that it prevents unnecessary re-renders, contributing to better performance.

## Resources

- [useRef - React Docs](https://react.dev/reference/react/useRef)
- [BUILD a React Timer with useRef | React Hooks useRef Tutorial by Dave Gray](https://www.youtube.com/watch?v=s6UAuFzL308)

## Thank you!

Thank you for your time and for reading this!
