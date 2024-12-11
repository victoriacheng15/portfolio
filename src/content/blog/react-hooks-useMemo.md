---
title: "React Hooks - useMemo"
description: "Optimize React app performance with useMemo hook. Learn advantages disadvantages & see performance difference with before/after examples."
date: 2023-01-11
tags: [react]
---

## What is useMemo?

The useMemo is a React Hook that allows you to remember a component's computed value. It is a way to optimize the performance of your React apps by caching the result of an expensive calculation and reusing it if the values have **not** changed.

useMemo takes 2 parameters, `calculateValue` and `dependencies`.

- calculateValue: this is the function that is calculating the value that you want the hook to remember for you
- dependencies: this is to tell the hook to run the action when one of the input values is changed

If you have a difficult time understanding, let's think this way:

This is your **first time** at the grocery store. You are not familiar with the store. You have to spend a lot of time walking around, finding the items you need, and putting them into the basket. This is similar to when the component first render and has to perform an expensive calculation.

However, the next time you go to the store, you already know where things are and you can just quickly grab what you need and then check out. This is similar to the component re-renders, and it **remembers** and **reuse** the values that were calculated before. The expensive calculation was skipped here!

## Advantages and Disadvantages

Advantages:

- Improve the performance of the apps by preventing unnecessary re-render
- Memoize expensive calculations, and make sure that they are only performed when necessary
- Prevent unnecessary re-renders of child components

Disadvantages:

- Make your code more complex by requiring you to be mindful of the inputs and memoized computation
- Can lead to stale data in the cache if not used carefully
- Not a good fit for small or cheap computations

## Example

Let's see this code in action!

The steps:

- Click `+` button once or twice
- Click the `add Todo` button a couple of times
- Watch how quickly `New Todo` text is added to the list

:::note

The test code is provided below.

:::

### Without useMemo

Watch how quickly the `New Todo` text is added to the list. It is very slow.

<img src="https://user-images.githubusercontent.com/35031228/211906233-0e3fe9fc-3273-47b0-9f38-d5fa8fce318a.gif" alt="">

### With useMemo

Watch the `New Todo` text again. Noticed it is adding quickly and smoothly.

<img src="https://user-images.githubusercontent.com/35031228/211906235-be3476e9-7665-4466-bbd3-0e75b481bf71.gif" alt="">

### Test Code

I kidnapped this code from [W3Schools](https://www.w3schools.com/react/react_usememo.asp).

```jsx
export default function App() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);
	const calculation = expensiveCalculation(count);
	// const calculation = useMemo(() => {
	//   return expensiveCalculation(count)
	// }, [count]);

	const increment = () => {
		setCount((c) => c + 1);
	};

	const addTodo = () => {
		setTodos((t) => [...t, "New Todo"]);
	};

	return (
		<main>
			<div>
				<h2>My Todos</h2>
				<button onClick={addTodo}>Add Todo</button>
				{todos.map((todo, index) => {
					return <p key={index}>{todo}</p>;
				})}
			</div>
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				{calculation}
			</div>
		</main>
	);
}

const expensiveCalculation = (num) => {
	console.log("Calculating...");
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}
	return num;
};
```

## Recap

The useMemo hook is to remember the calculated value between renders. It is a way to optimize the performance of the React apps by caching the result of the expensive calculation and reusing the unchanged calculated value.

If you have a difficult time understanding this hook, remember the "grocery store" analogy. Or there is a brand new item that you have not used before. You need to read the manual. Once you understand and know how to use the new item. The next time, you can start using the item without reading the manual.

Check the resources below if you would like to see more examples.

## Resources

- [useMemo - React Docs (beta)](https://beta.reactjs.org/reference/react/useMemo)
- [Understanding useMemo and useCallback by Josh Comeau](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [useMemo Explained | React Hooks by Dave Gray](https://www.youtube.com/watch?v=oR8gUi1LfWY&list=PL0Zuz27SZ-6PSdiQpSxO9zxvB0ns6m3ta&index=2)

## Thank you!

Thank you for your time and for reading this!
