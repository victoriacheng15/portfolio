---
title: January Reflection 2023
description: "Reflecting on January, inspired by Atomic Habits, I'm learning Next.js, Chakra UI, and Redux Toolkit for the Hacker News project. Next up: Cypress."
date: 2023-01-25
tags: [reflection]
---

## Monthly Reflection

I recently read the book Atomic Habits by James Clear (just before the end of 2022), which emphasizes the importance of raising awareness of our current actions to make our habits more automatic. Based on this insight, I have decided to write a monthly reflection on what I have learned and accomplished during the month.

I have done a couple of things:

- Published 3 blogs on React Hooks, including `useContext`, `useMemo`, and `useCallback`.
- Started a new project named "hacker-news-next," which is currently in progress. This project is built using Next.js, Chakra UI, and Redux Toolkit.
- Begun learning Cypress and am excited to write tests with it in the future.

## Hacker News Clone

[View the short video of the project here](https://user-images.githubusercontent.com/35031228/214688643-0e9c531f-bb15-4e22-915a-f0e24dea189c.mp4)

As of now, the page has a completed navbar and a small UI element to display story information such as the title, author, time since posting, and the total number of comments on the top page. I am currently working on adding comments and sub-comments to the comments page. I have successfully added comments, but am currently facing challenges with adding sub-comments. One potential solution I am considering is using a recursive method to fetch the API, but I am unsure if this is the best approach. I will have to see how it goes. 🤔

### Next.js

Next.js is a widely-used framework for building React.js applications that allow developers to create advanced web applications efficiently. It comes with several features such as server-side rendering, hot reloading, and dynamic routing.

One of the benefits I particularly appreciate about Next.js is that it eliminates the need for me to install 'react-router-dom' to set up routes. Next.js handles this for me. Additionally, I find the dynamic routing feature to be very useful as it enables me to create links for individual items based on their IDs or slugs.

### Chakra UI

Chakra UI is a collection of React components that allows for the easy creation of accessible and customizable user interfaces. It provides pre-built components, such as grids, forms, buttons, and other common elements, to aid in the rapid development of applications.

I particularly appreciate the following features of Chakra UI:

- The ability to render a component as a different HTML element by using the as prop.
- The class naming convention, which is similar to Tailwind CSS, makes it easy for me to use and understand.

### Redux Toolkit

The Redux Toolkit is a tool that enables developers to create and manage state in JavaScript applications using Redux, React, and Redux Thunk. Initially, when I first learned about it, I felt overwhelmed. I decided to focus on learning the `useContext` and `useReducer` hooks to understand how they handle states. Once I gained a better understanding of these hooks, the Redux Toolkit became easier to learn. It offers several features that simplify the process of building and maintaining Redux-based applications.

I particularly like:

- Built-in middleware for handling async actions using Redux Thunk
- The ability to write "slice" files that define the state, actions, and reducers

## Cypress

Cypress is a JavaScript testing framework that aims to simplify end-to-end testing and increase its reliability. From what I have read in the documentation, Cypress can also be utilized for unit testing, which involves testing individual pieces of code to ensure they function as intended. One benefit of Cypress is that it has a built-in browser and executes tests in the same environment as the application, which I believe makes it easier to debug and maintain the tests. I am excited to further explore this testing framework with the Hacker News project.

## Thank you!

Thank you for your time and for reading this!
