---
title: "February Reflection 2024"
description: "Automate tasks with Python in Monthly Reflection! Extract articles, redesign journal entries, and use Makefile for efficiency. Transform ideas effortlessly! 🚀"
date: 2024-02-27
tags: [reflection]
---

## Monthly Reflection

In mid-February, I cooked up this little app called "Articles Extractor." It smoothly grabs articles from freeCodeCamp and Substack, then neatly drops them into a Google Sheets spot for easy consolidation. Currently, the app resides on the Raspberry Pi and runs on a daily basis with cron schedule!

This got me pondering about using Python for my daily journal entries in Google Sheets. Initially, I started with a Google Form, and the setup made sorting data a real headache 😱. On the hunt for a fix, I dabbled with Google Sheets' `arrayFormula` to split the data. It did the trick by processing a whole column ,whether the row is empty or not, splitting cell data into lines with a specific word. However, it threw in some readability issues with all those empty spaces across rows.

After experimenting with pivot tables to sort out extracted article data, I thought of an efficient approach on how to sort journal data. This led me to redesign the journal data entry process—out with the Google Form, and in with using the terminal for journal inputs (ideally, one input equals one row), and finally, sending the entry to the Sheets. Now, I can easily sort entries based on categories with pivot tables.

In the next phase of my little project, I went deep into setting up a script for dropping my categorized journal bits into the sheets. It's super handy since I practically live with the terminal open, and even when I'm away from the computer, I can easily write down data on my phone 📱.

And here's a bonus discovery, Makefile is awesome! It allows you to set up commands, like "make journal" for sending journal data after gathered inputs. I can see this approach making it easier for other ideas to come to life. Excited to see how these ideas shape up! 😎 😀

## Books

- Smart Brevity - A communication strategy designed to convey key messages clearly and concisely, aiming for effectiveness and impact through brevity.
- Modern Frontend Development with Node.js - Discover effective frontend development strategies with Node.js, encompassing the latest trends, essential tools, and best practices for creating modern and efficient user interfaces.

## Blogs

- [Docker Compose - Configuring Images and Container Names](https://victoriacheng15.vercel.app/posts/docker-compose-configuring-images-and-container-names)
- [Empower Your Journey with the 7 Highly Effective Habits](https://victoriacheng15.vercel.app/posts/empower-your-journey-with-the-highly-effective-habits)
- [Managing Workflows with GitHub Actions: needs](https://victoriacheng15.vercel.app/posts/managing-workflows-with-github-actions-needs)
- [SSH & Desktop - Pi Connection Guide](https://victoriacheng15.vercel.app/posts/ssh-desktop-pi-connection-guide)
- [Keep Going - Navigate Your Creative Journey](https://victoriacheng15.vercel.app/posts/keep-going-navigate-your-creative-journey)
- [JavaScript - Change Array by Copy Methods](https://victoriacheng15.vercel.app/posts/javascript-change-array-by-copy-methods)
- [Smart Brevity - Your Path to Effective Communication](https://victoriacheng15.vercel.app/posts/smart-brevity-your-path-to-effective-communication)
- [TypeScript Utility Types - ReturnType](https://victoriacheng15.vercel.app/posts/typescript-utility-types-returntype)

## Thank you!

Thank you for your time and for reading this!
