---
title: March Reflection 2023
description: "Reflected on what I learned about run TS node app, ch 1 of the System Design, LCP and CLS from Lighthouse, and run a tests array with one of Jest's features."
date: 2023-03-28
tags: [reflection]
---

## Monthly Reflection

I think this month is pretty productive. I have done a couple of things:

- Published a blog about how to set up and deploy a TS node app
- Read chapter 1 of the System Design Interview
- Learned about API versioning and how to implement versioning from <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">REST API Design Best Practices Handbook</a>
- Understood about largest contentful paint and cumulative layout shift
- Discovered that Jest has a feature that you can loop through an array of test cases without using either `forEach`` or `for of` loops

### Setup and deploy a TS node app

I decided to explore creating a node application using TypeScript. Through my research, I discovered various ways to run the application using TypeScript, including `concurrently`, `nodemon`, and `ts-node-dev`. Personally, I prefer using `concurrently` with the `--watch` flag from the node since it requires fewer package installations. However, when it comes to deployment, an additional step is necessary because the TypeScript code needs to be compiled into JavaScript.

Most deployment services have similar settings but focus on the `build` and `start` commands. For the build command, you need to install the required packages and then run `pnpm build`. For the start command, you can either use `pnpm server` or `node build/index.js`. Keep in mind that I named the output directory as `build`, so if you name it something else, like `dist`, you need to change the folder path to `index.js` accordingly.

```json
"scripts": {
  "start:build": "npx tsc -w", // compile TS to JS
  "start:run": "node --watch build/index.js", // run the dev server locally with index.js
  "start": "concurrently pnpm:start:*", // run the script that starts with "start:"
  "clean": "npx tsc --build --clean", // clean the build folder
  "build": "pnpm clean && pnpm tsc",
  "server": "node ./build/index.js"
},
```

You could check this <a href="https://victoriacheng15.vercel.app/posts/a-simple-guide-to-setting-up-and-deploying-node-with-typescript" target="_blank" rel="noopener noreferrer">blog</a> for more details.

### Chapter 1 of the System Design Interview

I learned about:

- Load balancer - distributing incoming traffic to servers to prevent one of the servers is overloading
- Tiers (web and server) - split tiers into individual services, this makes it easier for future expandability/scalability
- Content Delivery Network (CDN) - store static assets in CDN to reduce workloads on the server
- Cache data - cache data as much as you can with an expiration date
- Monitor systems - using logging and automation tools to check the health status of servers/data centers
- Database replication - a master DB (can write) with several cloned DBs (read-only), and this also to prevent one of DBs goes offline, there are backup DB.
- A lot more

This chapter has prompted me to consider the inner workings of a website, particularly how servers and databases are managed. For instance, when browsing through posts on LinkedIn or Twitter, the posts are probably being served from one of several cloned databases. Conversely, when creating a post, the content is likely sent to the master database.

- <a href="https://www.linkedin.com/posts/victoriacheng15_systemdesign-softwareengineering-activity-7043226359703212032-2xqM?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn post</a>

### API versioning

Over time, there will be improvements, new functionalities and more changes to the API. To manage these updates effectively, it is important to version the API. For the `ai-image-generation` project, I have implemented this practice by creating `v1` folder within the `src` directory and moving both `controllers` and `routes` folders into the `v1` folders. This allows for future improvement to the API by creating `v2` folder, enabling users to continue using older versions of the API if necessary, rather than being forced to switch to the latest version.

```
// folder structure
| src
| -- v1
| ---- controllers
| ---- routes
```

- <a href="https://www.linkedin.com/posts/victoriacheng15_typescript-softwareengineering-javascript-activity-7041831400752242688-Hs5P?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn post</a>
- <a href="https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api" target="_blank" rel="noopener noreferrer">The Handbook</a>
- <a href="https://github.com/victoriacheng15/ai-image-generation/tree/main/server/src/v1" target="_blank" rel="noopener noreferrer">ai-image-generation code on GitHub</a>

### Google Lighthouse

It is an open-source tool developed by Google that is used to audit and measure the performance, accessibility, search engine optimization (SEO), and best practices of web pages. It runs automated tests on a website and generates a report with actionable recommendations on how to improve the website's performance and user experience.

I used the Google Lighthouse tool to assess the performance of my projects. However, the tool highlighted some crucial oversights, such as the absence of a meta description and an ARIA label for social links. I took immediate action to rectify these issues. Upon further analysis of the tool's report, I discovered that there were still two areas causing problems.

**Largest contentful paint (LCP)**

LCP is a metric used to measure the loading performance of a web page. It measures the time it takes for the largest content element on a web page, such as an image, video, or block-level text element, to be fully rendered in the viewport. A couple of ways to optimize LCP is to make sure that the element can start loading as early as possible, render as soon as resources are loaded, and more.

- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-improvement-softwareengineering-activity-7044681649657155585-6TEd?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn post</a>

**Cumulative layout shift (CLS)**

It is a measure of the largest burst of layout shift scores for all unexpected layout shifts that happen during your stay on the webpage. The most common causes for poor CLS are images without dimensions, dynamically injected content and more.

Let's say a page has a cover image on top of the page.

1. The img element _doesn't_ have dimensions. The browser knows there is an image, but doesn't know the dimension, so it _cannot_ set a blank placeholder. Once the image is loaded, text contents will be pushed down and the readers would lose the text that they were reading.
2. The img element _do_ have dimensions. The browser knows there is an image AND the size of the image, so it _can_ set a blank placeholder. Once the image is loaded, text contents will stay in the same position.

Additionally, you can implement a skeleton layout for dynamically injected content. This enables you to display placeholders that inform readers that content is forthcoming, thus reducing the likelihood of layout shifts. By using this approach, I was able to significantly improve the Cumulative Layout Shift (CLS) from 0.344 to 0.033, which yielded impressive results. This experience surprised me and highlighted the importance of considering the use of skeleton layouts in the future.

- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-softwareengineering-improvement-activity-7045097140867518464-ZwGu?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">LinkedIn post - part 1</a>
- <a href="https://www.linkedin.com/posts/victoriacheng15_coding-softewareengineering-nextjs-activity-7046171092901646336-lhXW?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer"> LinkedIn post - part 2</a>

### Jest - `test.each(table)(name, fn, timeout)`

First, you set up cases array with input(s) and expected, and then used `for of` loop to iterate through the cases array to check results. `test.each(table)(name, fn, timeout)` is the same as `it.each(table)(name, fn, timeout)`, so you can use either `test` or `it`. The `table` will be the array of arrays with values you want to pass into the test function.

This is pretty amazing. It allows me to reduce the code by one line and it looks cleaner.

**Before**

```js
describe("isograms", () => {
	const cases: [string, boolean][] = [
		["Dermatoglyphics", true],
		["isogram", true],
		["aba", false],
		["moOse", false],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			expect(isIsogram(str)).toBe(output);
		});
	}
});
```

**After**

```js
describe("isograms", () => {
	const cases: [string, boolean][] = [
		["Dermatoglyphics", true],
		["isogram", true],
		["aba", false],
		["moOse", false],
	];

	it.each(cases)("when str = '%s', should return '%s'", (str, output) => {
		expect(isIsogram(str)).toBe(output);
	});
});
```

See more in this <a href="https://jestjs.io/docs/api#testeachtablename-fn-timeout" target="_blank" rel="noopener noreferrer">section</a> of the Jest docs.

## Thank you!

Thank you for your time and for reading this!
