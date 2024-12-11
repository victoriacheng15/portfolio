---
title: April Reflection 2023
description: "Reflected on my Next.js journey: app dir, API route files, Redux Toolkit for state mgmt, SQL queries through a game, and AWS Amplify deployment."
date: 2023-04-26
tags: [reflection]
---

## Monthly Reflection

This month, I wrote 2 blogs which are one more than the "usual". Why the "usual"? 😂 It depends on the month and my motivation. 😅 At least, let me celebrate this small win.

The blogs:

- <a href="https://victoriacheng15.vercel.app/posts/nextjs-state-management-with-redux-toolkit-part-1" target="_blank" rel="noopener noreferrer">Nextjs State Management with Redux Toolkit - Part 1</a>
- <a href="https://victoriacheng15.vercel.app/posts/nextjs-state-management-with-redux-toolkit-part-2" target="_blank" rel="noopener noreferrer">Nextjs State Management with Redux Toolkit - Part 2</a>

Both of my blog posts discuss the process of setting up the Redux Toolkit with Nextjs (non-app directory). Initially, the codebase was messy, but I eventually refactored it to be more organized and readable. However, I learned an important lesson during the process: I refactored the codebase too early, which caused more downtime for me as I had to constantly refer back to the files to see what I had written. I should have waited until the foundation of the project was completed before refactoring, just like building a house required a solid foundation before adding the walls, roof, and other components. Developing a software project also requires a solid foundation before implementing more complex features or refactoring existing the codebase.

In the context of software development, the foundation might include setting up the necessary infrastructure, such as creating a file structure, defining naming conventions, using any APIs, and more. Once this foundation is in place, it becomes easier to add more functionality and improve the existing codebase.

## AWS Amplify

I discovered AWS Amplify and it is a solution that you can deploy frontend web and mobile apps on the internet. To my surprise that Amplify allows you to deploy a full-stack web app. 😮 It also offers a range of capabilities, such as user authentications, the ability to create either REST or graphQL API, and a database to store the app information.

While I went through the hands-on tutorial, I encountered a couple of issues. The first error message was "global was not defined" while using Vite bundler. The problem was due to Vite not defining a global field in the window as Webpack does. To solve this issue, a global field was added to the Vite configuration file as advised by the Viteh docs. Another error message was "request' is not exported by \_\_vite-browser-external". The issue was similar to the first one and was caused by the Amplify JavaScript library relying on node-specific features.

```ts
export default defineConfig({
	plugins: [react()],
	define: {
		global: "window", // solved the first error message
	},
	resolve: {
		alias: {
			"./runtimeConfig": "./runtimeConfig.browser", // solved the 2nd error message
		},
	},
});
```

In the end, this cannot go wrong with having a good Googling skill, digging into solution(s) on Stackoverflow or somewhere else on the internet to see why or why this happened

- <a href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/?ref=gsrchandson&id=updated" target="_blank" rel="noopener noreferrer">Getting Started with AWS - Build a Full-Stack React Application</a>
- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-softwareengineering-aws-activity-7047992828769009664-n4xL/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>
- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-softwareengineering-aws-activity-7049031462158831617--4Mb/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>
- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-softwareengineering-aws-activity-7049754407764201474-jzTn/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>

## Nextjs 13 with app directory

API routes provide a convenient way to interact with a database, by writing `GET/POST/DELETE/PUT` functions separately in a "route" file, each function performs its own operation with the database. This is easier than using if statements in a handler function to check the request method. Keep in mind that I have not worked with the older approach, but if there are many if statements, this could make the function hard to read. With Next.js file-based routing, working with API routes is enjoyable. It's essential to remember that each framework or library has its strengths and weaknesses, and you should choose the one that suits your requirements best.

- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-programming-softwareengineering-activity-7050520948839485440-NyBb/?utm_source=share&utm_medium=member_desktopp" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>

## Rebuilt rest-countries-api with nextjs

The Rest Countries API was rebuilt with Next.js, exploring its app directory, Redux Toolkit Query, and skeleton layout. The app's core features include a search box and a dropdown menu to filter countries based on text and the selected region, along with a theme toggle for dark and light modes. The new Next.js version allows users to search for both text and region, features a clear search button, a small window for displaying country cards, and a skeleton layout.

Outline of the 3 apps:

- 1st: JavaScript React and useContext as the state management with pagination feature
- 2nd: Similar to the first, but with TypeScript and used useReducer, useMemo, and useCallback hooks
- 3rd: Nextjs with TypeScript and Redux Toolkit Query

What did I learn from this after rebuilding the same app 3 times? Starting with the basics and gradually building the features For instance, I began with useContext for state management in the 1st version, then added more hooks using TypeScript in the 2nd version, and finally incorporated Nextjs and Redux Toolkit Query in the 3rd version. This approach allowed me to focus on learning one or a few React hooks at a time, which helped me to gain a better understanding of each one.

- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-programming-softwareengineering-activity-7051590391254446080-RMR1/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>

## Redux Toolkit Query

RTKQ simplifies data fetching and caching logic in web applications. It eliminates the need to write async/await or promise functions using the useEffect hook. RTKQ uses a base URL and lets you define the endpoint for fetching the required data.

```ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://restcountries.com/v3.1";
const FIELD =
	"fields=cca3,flags,name,population,region,capital,subregion,tld,currencies,languages,borders";

export const restCountriesApi = createApi({
	reducerPath: "restCountriesApi",
	baseQuery: fetchBaseQuery({ baseUrl: URL }),
	endpoints: (builder) => ({
		getAllCountries: builder.query<Country[], void>({
			query: () => `/all?${FIELD}`,
			transformResponse: (response: Country[]) =>
				response.sort((a, b) => a.name.common.localeCompare(b.name.common)),
		}),
		getOneCountry: builder.query<Country[], string>({
			query: (code) => `/alpha/${code}`,
		}),
	}),
});

export const { useGetAllCountriesQuery, useGetOneCountryQuery } = restCountriesApi;
```

- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-programming-softwareengineering-activity-7053762938716766208-x0nR/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>
- <a href="https://github.com/victoriacheng15/rest-countries-api-next" target="_blank" rel="noopener noreferrer">RTKQ used in rest-countries-api-next</a>

## SQL Learning

I discovered this site where you can learn or practice SQL query commands through a story about a lost submarine. Using SQL queries to search data tables and uncover what happened to the submarine and crew. If needed, there is a "learn" button to assist with queries.

- <a href="https://lost-at-sql.therobinlord.com/" target="_blank" rel="noopener noreferrer">Lost at SQL: The SQL Learning game</a>
- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-programming-softwareengineering-activity-7056270964468170753-_w6x/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn Post</a>

## Thank you!

Thank you for your time and for reading this!
