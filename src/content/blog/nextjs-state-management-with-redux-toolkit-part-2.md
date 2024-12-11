---
title: Nextjs State Management with Redux Toolkit - Part 2
description: "Part 1 covered setting up Redux Toolkit and topSlice function and then how would I refactor the codebase to make it cleaner and more readable way"
date: 2023-04-19
tags: [react]
---

## Intro

In my <a href="https://victoriacheng15.vercel.app/posts/nextjs-state-management-with-redux-toolkit-part-1" target="_blank" rel="noopener noreferrer">previous post</a>, I covered setting up Redux Toolkit and fetching stories from the top category. However, the application now needs to display stories from the show and job categories as well. As a result, the code needs to be refactored to create a reusable initial state object and function.

**Full code**

```ts
// src/features/topSlice.ts
import type { AppState } from "../store";
import { Pagination } from "../types/features";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
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

## First step - extract type declarations

Extract type declarations to `features.d.ts` under the `types` folder.

```ts
// types/features.d.ts
import { IItem } from "hacker-news-api-types";

type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

interface StoryResponse {
	details: IItem[];
	loadingStatus: LoadingStatus;
	error: string;
	page: number;
	limit: number;
}

type Pagination = Pick<StoryResponse, "page" | "limit">;
```

## Second Step - refactor API fetch function

For the hacker news API, it has a couple of categories for different types of stories.

In this app, we will use the 3 categories below:

- /v0/topstories.json
- /v0/showstories.json
- /v0/jobstories.json

From the endpoints, we can write the `getStoryType` function with `type` as the parameter.

To recap the API, each JSON data will contain an array of story IDs, limited to 10 on the first load. To retrieve details for these IDs, map through the data with `getIdDetails` function.

```ts
// utils/fetchHelpers.ts
import { StoryResponse } from "@/types/features";
import { IItem } from "hacker-news-api-types";
import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const DETAIL_URL = (id: number) => `${BASE_URL}/item/${id}.json`;

function getStoryType(type: string) {
	return `${BASE_URL}/${type}stories.json`;
}

// this is to fetch details of each story ID
async function getIdDetails(id: number) {
	const res = await axios.get(DETAIL_URL(id));
	return res.data;
}

export async function getAllDetails(type: string, page: number, limit: number) {
	// get array of story IDs
	const res = await axios.get(getStoryType(type));
	const details = res.data;

	// mapped through first 10 IDs and then Promise.all()
	const promises: IItem[] = details.slice(page, limit).map(getIdDetails);
	return await Promise.all(promises);
}

export const initialState: StoryResponse = {
	details: [],
	loadingStatus: "idle",
	error: "",
	page: 0,
	limit: 10,
};
```

## Third Step - refactor fetchTopStories

The `fetchTopStories` function is refactored with `getAllDetails` function from `fetchHelpers.ts`. With this, we can expand show and job categories by changing a couple of things.

- fetchTopStories => fetchShowStories
- tops/topsStoryDetails => shows/showsStoryDetails
- getAllDetails("top", page, limit) => getAllDetails("show", page, limit)
- topsSlice => showsSlice
- name: "tops" => name: "shows"
- fetchTopStories.pending/fulfilled/rejected => fetchShowStories.pending/fulfilled/rejected
- topsSlice.actions => showsSlice.actions
- selectTops and state.tops => selectShows and state.shows
- export default topsSlice => export default showsSlice

Repeat the same process for the job category

```ts
import type { AppState } from "../store";
import { Pagination } from "../types/features";
import { getAllDetails, initialState } from "../utils/fetchHelpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// change below
export const fetchTopStories = createAsyncThunk(
	// change below
	"tops/topsStoryDetails",
	async ({ page, limit }: Pagination) => {
		// change below
		const details = await getAllDetails("top", page, limit);
		return details;
	},
);
// change below
const topsSlice = createSlice({
	// change below
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
			// change below
			.addCase(fetchTopStories.pending, (state) => {
				state.loadingStatus = "loading";
			})
			// change below
			.addCase(fetchTopStories.fulfilled, (state, action) => {
				state.loadingStatus = "succeeded";
				state.details = [...action.payload];
			})
			// change below
			.addCase(fetchTopStories.rejected, (state, action) => {
				state.loadingStatus = "failed";
				state.error = action.error.message!;
			});
	},
});

// change below
export const { loadMoreStories } = topsSlice.actions;
// change below
export const selectTops = (state: AppState) => state.tops;
// change below
export default topsSlice;
```

## Fourth Step - story pages

Once the API fetch function was refactored and `createSlice` functions for show and job categories were set up, every page is now prepared to exhibit stories according to their respective categories.

A couple of things to change:

- top() => show()
- selectTops => selectShows
- fetchTopStories() => fetchShowStories()
- export default top => export default show

Repeat the same process for the job category.

```ts
// change below
function top() {
	const dispatch = useAppDispatch();
  // change below
	const { details, status, error, page, limit, loadMoreStories } = useAppSelector(selectTops);

	useEffect(() => {
		if (status === "idle") {
      // change below
			dispatch(fetchTopStories({ page, limit }));
		}
	}, [dispatch, status, page, limit]);

	return (
		// do your magic here!
	);
}
// change below
export default top;
```

## Fifth Step - custom hooks (optional)

Have you noticed that you do need to import `useAppDispatch` and `useAppSelector` for each page? At the time, I was thinking of creating a custom hook that will take all initial states from all pages. This way, the `useAppDispatch` and `useAppSelector` only need to be imported once!

```ts
const {
	details: tops,
	loadingStatus: topLoading,
	error: topError,
	page: topPage,
	limit: topLimit,
} = useAppSelector(selectTops);
```

By using destructuring syntax, we can extract values from objects and assign them to a new variable with a more descriptive name. This can help to make the code more readable and easier to tell which categories this belongs to.

```ts
// hooks/useFetchAllStores.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchTopStories, selectTops, loadMoreStories as loadMoreTop } from "@/features/topsSlice";
// repeat the same process for showsSlice and jobsSlice
// utilize import as statement to rename loadMoreStories to loadMore{type}

export function useFetchAllStories() {
	const dispatch = useAppDispatch();

	const {
		details: tops,
		loadingStatus: topLoading,
		error: topError,
		page: topPage,
		limit: topLimit,
	} = useAppSelector(selectTops);

	const topPagination = {
		page: topPage,
		limit: topLimit,
	};

	// include dispatch keyword for any dispatch() action
	const dispatchTopStories = () => dispatch(fetchTopStories(topPagination));
	const dispatchMoreTop = () => dispatch(loadMoreTop());

	// repeat the same process for show and job categories

	// this below to useEffect is to display top 5 recent stories on the homepage
	const allLoadingConditions =
		topLoading === "idle" && showLoading === "idle" && jobLoading === "idle";

	const standardPagination = {
		page: 0,
		limit: 10,
	};

	useEffect(() => {
		if (allLoadingConditions) {
			dispatch(fetchTopStories(standardPagination));
			dispatch(fetchShowStories(standardPagination));
			dispatch(fetchJobStories(standardPagination));
		}
	}, [dispatch, allLoadingConditions]);

	return {
		tops,
		topLoading,
		topError,
		topPage,
		topLimit,
		dispatchTopStories,
		dispatchMoreTop,
		// repeat the same process for the rest, and replace top to show/job
	};
}
```

Additionally, make sure to keep these variables in the same order and naming convention to maintain a consistent reading flow and make the code easier to understand.

This is a big custom hook that contains top, show and job categories. It can be broken down into a small custom hook for each category.

The code snippet below can be used again for show and job categories by replacing "top" to "show" and "job".

```ts
// hooks/useFetchTop.tsx
import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

// change below
export function useFetchTop() {
	// change below
	const { tops, topLoading, topError, topLimit, dispatchTopStories, dispatchMoreTop } =
		useFetchAllStories();

	useEffect(() => {
		if (topLoading === "idle") {
			// change below
			dispatchTopStories();
		}
		// change below
	}, [dispatchTopStories, topLoading, topLimit]);

	// change below
	return {
		tops,
		topLoading,
		topError,
		dispatchMoreTop,
	};
}
```

Let's refactor each page!

_Before:_

```ts
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

_After:_

```ts
function top() {
  const { tops, topLoading, topError, dispatchMoreTop } = useFetchTop();

	return (
		// do your magic here!
	);
}

export default top;
```

## Recap

Initially, code may appear unattractive when it is first written. Refactoring is beneficial in enhancing the codebase and making it more organized.

An important lesson I've learned is to avoid refactoring too early, and instead wait until the first `createSlice` function has been tested and can correctly fetch the data and display the UI.

To summarize: Write the code in its simplest form initially, and then improve it through refactoring when necessary.

## Resources

- <a href="https://github.com/victoriacheng15/hacker-news-next" target="_blank" rel="noopener noreferrer">
    hacker-news-next repository</a>

## Thank you!

Thank you for your time and for reading this!
