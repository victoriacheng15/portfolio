---
title: February Reflection 2023
description: "Reflected on Hacker News clone learnings, especially Redux Toolkit. Gained Cypress API familiarity by writing e2e tests."
date: 2023-02-22
tags: [reflection]
---

## Monthly Reflection

During the month, I have published blogs:

- What is structuredClone in JavaScript
- Let's Discover the JavaScript Map Keyed Collection
- Explore JavaScript Reduce Function

### Clean Code

I also completed reading the Clean Code book.

The author mentioned a couple of things:

- Keep functions small and clear to see what are they doing
- Use descriptive names that are clear and straightforward
- Utilize unit tests to catch bugs as early as possible
- Follow Single Responsibility Principle

This book is a valuable resource for improving code quality. The key takeaway is to continuously review and refactor code, utilizing unit tests to ensure functionality and maintainability.

[Overall about the book post on LinkedIn](https://www.linkedin.com/posts/victoriacheng15_cleancode-softwareengineering-activity-7033819376638181376-fBn6?utm_source=share&utm_medium=member_desktop)

### Hacker News Clone

I learned a lot about using Redux Toolkit in React apps. Initially, I read several blogs to understand how it works. Eventually, I decided to implement Redux Toolkit in a project by following YouTube and Redux documentation. Prior to using Redux Toolkit, I had tried using the useContext and useReducer hooks in one of my projects. To my surprise, Redux Toolkit was fairly simple and worked similarly to the hooks, but with a different coding style.

In the project, I needed to handle stats for different pages. Instead of writing import statements for `useApplDispatch` and `useAppSelector` for each of the four pages, I created a custom hook called useFetchAllStories. This hook takes care of the `useApplDispatch` and `useAppSelector` calls and returns all the values that each page needs. I then split the big hook into smaller ones for each page, making it easy to manage stats for each page clearly and concisely.

Before using the Chakra UI component library, I didn't have experience with component libraries or similar tools. However, I learned that Chakra UI can significantly speed up the component-building process by providing pre-built components that have a consistent UI, accessibility considerations, and customizable options like color schemes and layouts. Furthermore, the library's `as` props feature allows developers to render components as specific HTML elements, adding to its versatility.

[Live Site](https://hacker-news-next.vercel.app/)
[Code](https://github.com/victoriacheng15/hacker-news-next#readme)

### Cypress

To familiarize myself with the Cypress API, I wrote several end-to-end (e2e) tests. During this process, I learned how to find elements based on their class or id, interact with input fields by typing text, and check for specific attributes like disabled or readonly. Additionally, I explored other ways to verify the behavior of elements using the Cypress API.

[cypress-qa-tests repo](https://github.com/victoriacheng15/cypress-qa-tests#readme)

## Thank you!

Thank you for your time and for reading this!
