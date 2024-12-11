---
title: React Hooks - useCallback
description: "Boost React app performance with useCallback hook. Understand how it works, prevent re-renders & compare examples with/without useCallback."
date: 2023-01-18
tags: [react]
---

## What is useCallback?

The hook allows you to cache a function definition and optimize the performance of your component by only re-rendering if one of its dependencies has changed. This hook works similarly to `useMemo`, but to memorize function instead.

The hook takes 2 parameters: `function`, and `dependencies`.

- `function` - the value of the function that you want to cache or remember
- `dependencies` - this is to tell the hook to re-run when one of the dependencies' values changed

Imagine you have a toolbox containing a hammer, a screwdriver, and a wrench that are all in brand-new condition. The toolbox represents the `useCallback` hook, which keeps track of the condition of these tools. Every time you use a tool, its condition slowly degrades, but you don't have to replace the tool right away. For example, you used the hammer many times and it is wearing out faster than the other 2 tools. One day, you replaced the old and worn-out hammer with a brand-new hammer. This is when the toolbox will "re-render" because the hammer dependency is changed. This is similar to how a component will only re-render if one of its dependencies has changed, as determined by the `useCallback` hook.

## Why React re-render?

React re-renders whenever its state or value changes. Remember how JavaScrip evaluates equals for string, number, array, object, and function? As long as, the state or value reminds the same, re-render should not happen, however, that is not the case for arrays, objects, and functions.

See the function example below, both functions return the same value `hi`, but when you use triple equals and get a `false` result. The `useCallback` hook is to remember the value from the function and then both functions will be the "same".

```js
console.log("Number comparsion", 1 === 1); // true
console.log("String comparsion", "hi" === "hi"); // true
console.log("Array comparsion", [] === []); // false
console.log("Object comparsion", {} === {}); // false

function ff1() {
	return "hi";
}

function ff2() {
	return "hi";
}

console.log("Function comparion", ff1 === ff2); // false
```

## The difference between with and without useCallback

### Without useCallback

As you can see, I typed `hello` (5 letters) and the console shows it logged the same thing 5 times. This tells us that the app was re-rendered 5 times.

<img src="https://user-images.githubusercontent.com/35031228/213028318-be0c50c3-20a8-4e31-8007-5b99363449c8.gif" alt="the console log will log 5 times as you type hello without useCallback">

### With useCallback

Let's add `useCallback` hook. I typed `hello` like I did before and the console doesn't show any logged value. This is because `useCallback` hook knows the function value is the same as before, therefore, the app did not re-render.

<img src="https://user-images.githubusercontent.com/35031228/213028316-ac34dd90-f6c8-4c93-a793-281ac56e375b.gif" alt="the console log doesn't log anything as you type with useCallback">

### Test Code

I borrowed partial code from Dave Gray's video and I listed it as one of the resources below.

```jsx
function App() {
	const [userInput, setUserInput] = useState("");
	const [num1] = useState(4);
	const [num2] = useState(5);

	const sum = () => num1 + num2;
	// const sum = useCallback(() => num1 + num2, [num1, num2]);

	useEffect(() => {
		console.log(`New sum value: ${sum()}`);
	}, [sum]);

	return (
		<main className="App">
			<input
				type="text"
				placeholder="input"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<h2>Output: {userInput || "--"}</h2>
			<h2>Sum: {sum()}</h2>
		</main>
	);
}
```

## Recap

The `useCallback` hook and the `useMemo` hook have similar functionality in preventing unnecessary re-renders and improving the performance of React apps. However, it's not necessary to wrap all functions with useCallback and it depends on the app structure and the specific use case. A good practice is to use React DevTools to inspect which components are causing performance issues, and then determine if `useCallback` or `useMemo` would be an appropriate solution in those cases.

## Resources

- [useCallback - React Docs (beta)](https://beta.reactjs.org/reference/react/useCallback)
- [Understanding useMemo and useCallback by Josh Comeau](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [useCallback Explained | React Hooks by Dave Gray](https://www.youtube.com/watch?v=FB_kOSHk1DM&list=PL0Zuz27SZ-6PSdiQpSxO9zxvB0ns6m3ta&index=1&t=2s)

## Thank you!

Thank you for your time and for reading this!
