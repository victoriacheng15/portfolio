---
title: Nextjs State Management with Redux Toolkit - Part 1
description: "This guide provides a step-by-step process for setting up Redux Toolkit with Next.js, enabling you to easily manage state in your web applications"
date: 2023-04-12
tags: [react]
---

## Intro

I developed an application named Hacker News utilizing Next.js (non-app
directory) with TypeScript and Redux Toolkit. During the development process, I
took the opportunity to explore Next.js and Redux Toolkit. In this
blog post, I will provide a detailed guide on how I configured Redux Toolkit to
manage the application's state.

You could check out the <a href="https://hacker-news-next.vercel.app/" target="_blank" rel="noopener noreferrer">deployed site</a> here.

Let's go!

## Setup

First, add dependencies to the project

```bash
pnpm install @reduxjs/toolkit react-redux
```

Since TypeScript was used for this app, there are extra steps that we need to
do.

### store.ts

```ts
// src/store.ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		// empty for now
	},
});

// this is to infer the AppState and AppDispatch types from the store
export type AppState = ReturnType<typeof store.getState>;
// inferred type e.g { posts: PostsState }, pretty much check types from the reducer: {}
export type AppDispatch = typeof store.dispatch;
```

### hooks.ts

```ts
// src/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
```

`AppDispatch()` and `useAppSelector` will be used instead of `dispatch()`
and `useSelector`.

### topsSlice.ts

First, do a couple of things:

- import necessary packages from `@reduxjs/toolkit` and AppState from `hooks.ts`
- Set up an initial state and its types
- set `BASE_URL` for the API link

```ts
// src/features/topSlice.ts
import type { AppState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItem } from "hacker-news-api-types";
import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
	// IItem is from the hacker-news-api-types package,
	// you can check out the link in the resources below
	details: IItem[];
	loadingStatus: LoadingStatus;
	error: string;
	page: number;
	limit: number;
}

type Pagination = Pick<StoryResponse, "page" | "limit">;

const initialState: StoryResponse = {
	details: [],
	loadingStatus: "idle",
	error: "",
	page: 0,
	limit: 10,
};
```

#### createAsyncThunk

`createAsyncThunk` is a utility function that simplified the process of creating asynchronous Redux actions. It generates the necessary action types and action creators for dispatching multiple Redux actions based on the result of an asynchronous operation. Also, it will return the necessary payload based on each action - `pending`, `fulfilled`, and `rejected`.

```ts
export const fetchTopStories = createAsyncThunk(
	// name for this asynchronous operation
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		// this will return an array of story ids
		const res = await axios.get(`${BASE_URL}/topstories.json`);

		// and then we will need to fetch details of each story id
		// with limit, this is to limit the amount of data to fetch
		const promises: IItem[] = res.data.slice(page, limit).map((id) => {
			const res = await axios.get(`${BASE_URL}/item/${id}.json`);
			return res.data;
		});

		const details = await Promise.all(promise);
		return details;
	},
);
```

Note: for the async function, you will need to pass the page and limit as an _object_ like above. Initially, I passed page and limit as individual parameters and I was getting an error.

#### createSlice

This is a function that accepts a name for this slice, an initial state, and an object of reducer functions.

**name**

This is the name for this slice. I named it `tops` in this case

**initial state**

Initial values for details (stories), loading status, error, page, and limit

```ts
const initialState: StoryResponse = {
	details: [],
	loadingStatus: "idle",
	error: "",
	page: 0,
	limit: 10,
};
```

**reducers**

I set the limit to 10 stories on the first load to reduce the waiting time for users, which means I need to set up a function called `loadMoreStore` to display more stories if users reach the bottom of the page.

**extraReducer**

extraReducer is similar to the switch statement and allows us to manage stats based on pending, fulfilled, and rejected.

If pending, the loading status should be `loading`
If fulfilled, the loading status should be `succeeded` and get details back
If rejected, the loading status should be `failed` and get an error message

Let's return to the `loadMoreStories` function. A little story, while coding it, I clicked the "load more" button to check if this works or not, but no new stories appeared. I was stumped for a couple of days until I realized I forgot to reset the loading status back to "idle." 😅 Moving on, the loading status won't reset after the API fetch, because the useEffect hook is conditioned to run only when the loading status is "idle." This ensures the API fetch dispatches only when necessary.

```ts
const topsSlice = createSlice({
	name: "tops",
	initialState,
	reducers: {
		loadMoreStories: (state) => {
			state.loadingStatus = "idle";
			state.limit += 10;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(fetchTopStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			.addCase(fetchTopStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			});
	},
});
```

**Lastly**

Finally, we reach the last part after setting up `store`, `createAsyncThunk`, `createSlice`, and more. There are a couple of things that we need to do.

```ts
// this will be everything from the reducers
export const { loadMoreStories } = topsSlice.actions;
// remember the AppState that we set up in the src/store.ts
// tops is the name from createSlice. Make sure it is the exact same name from the createSlice
export const selectTops = (state: AppState) => state.tops;
// good ole export default for topsSlice, store.ts will need this
export default topsSlice;
```

Remember we set up the store at the beginning, but leave the reducer object empty.

```ts
// src/store.ts
import topSlice from "./features/topSlice"

export const store = configureStore({
	reducer: {
		[topsSlice.name]: topSlice.reducer
		// alternative way
		// for this, you would need to write "export default topsSlice.reducer" and then import it as "topsReducer"
		// I tend to make typos here and there, I decide to go with first method instead :P
		tops: topsReducer
	},
});
```

Let's create a page that displays story details from the top category.

```ts
// src/page/top.tsx
import { useEffect } from "react";
import { fetchTopDetails, selectTops, loadMore } from "@/features/topStorisSlice";
import { useAppDispatch, useAppSelector } from "@/hooks"; // hooks.ts

function top() {
	const dispatch = useAppDispatch();
	// utilize destructuring method
	// these values will be the names that you set up for the initialState object
	const { details, loadingStatus, error, page, limit } = useAppSelector(selectTops);

	useEffect(() => {
		// remember the little story? this is the reason why I have to change the loading status back to idle
		if (loadingStatus === "idle") {
			dispatch(fetchTopDetails({ page, limit }));
		}
	}, [dispatch, loadingStatus, page, limit]);

	return (
		// do your magic here
	);
}

export default top;
```

## full code

Note: if you want to copy and paste the full code to play around, make sure the file paths are correct on your end!

```ts
// src/features/topSlice.ts
import type { AppState } from "../store";
import { Pagination } from "../types/features";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
	// IItem is from the hacker-news-api-types package,
	// you can check out the link in the resources below
	details: IItem[];
	loadingStatus: LoadingStatus;
	error: string;
	page: number;
	limit: number;
}

type Pagination = Pick<StoryResponse, "page"| "limit">

const initialState: StoryResponse = {
	details: [],
	loadingStatus: "idle",
	error: "",
	page: 0,
	limit: 10,
};

export const fetchTopStories = createAsyncThunk(
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		const res = await axios.get(`${BASE_URL}/topstories.json`);

		const promises: IItem[] = res.data.slice(page, limit).map((id) => {
			const res = await axios.get(`${BASE_URL}/item/${id}.json`);
			return res.data;
		});

		const details = await Promise.all(promise);
		return details;
	}
);

const topsSlice = createSlice({
	name: "tops",
	initialState,
	reducers: {
		loadMoreStories: (state) => {
			state.loadingStatus = "idle";
			state.limit += 10;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			.addCase(fetchTopStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			.addCase(fetchTopStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			});
	},
});

export const { loadMoreStories } = topsSlice.actions;

export const selectTops = (state: AppState) => state.tops;

export default topsSlice;

// src/pages/top.tsx
function top() {
	const dispatch = useAppDispatch();

	const { details, status, error, page, limit } = useAppSelector(selectTops);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchTopStories({ page, limit }));
		}
	}, [dispatch, status, page, limit]);

	return (
		// do your magic here!
	);
}

export default top;
```

## Recap

Redux Toolkit is a set of tools that aims to make it easier to manage state in React apps. The toolkit provides a range of APIs that automate various tasks involved in creating reducers, actions, and middleware. Additionally, it comes with several performance optimizations that can help improve the speed of your application.

If you already have a good grasp on how to use the useContext and useReducer hooks from React, then learning how to use Redux Toolkit should be relatively straightforward. To help you get started quicker, I suggest that you check out the documentation and watch the Redux Toolkit series from Dave Gray. Both are listed below.

For part 2, let's see the refactoring action and how I expand the fetching function to other types of stories! ✌

## Resources

- <a href="https://github.com/HackerNews/API" target="_blank" rel="noopener noreferrer">Hacker News API</a>
- <a href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo" target="_blank" rel="noopener noreferrer">Redux Toolkit by Dave Gray</a>
- <a href="https://redux-toolkit.js.org/tutorials/typescript" target="_blank" rel="noopener noreferrer">Redux Toolkit - TypeScript Quick Start</a>
- <a href="https://redux-toolkit.js.org/api/createAsyncThunk" target="_blank" rel="noopener noreferrer">Redux Toolkit - createAsyncThunk</a>
- <a href="https://redux-toolkit.js.org/api/createSlice" target="_blank" rel="noopener noreferrer">Redux Toolkit - createSlice</a>
- <a href="https://www.npmjs.com/package/hacker-news-api-types" target="_blank" rel="noopener noreferrer">hacker-news-api-types</a>

## Thank you!

Thank you for your time and for reading this!
