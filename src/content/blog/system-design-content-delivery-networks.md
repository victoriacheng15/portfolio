---
title: "System Design - Content Delivery Networks"
description: "Unveiling Content Delivery Networks (CDNs): Simplifying internet speed with mini-library-like networks. Faster, safer, smoother browsing."
date: 2024-04-16
tags: [system-design]
---

## What is Content Delivery Networks (CDNs)?

Picture the internet as a vast library, each webpage or video akin to a book stored in various rooms. Traditionally, accessing these resources meant journeying to a distant _main library_ known as the _origin server_.

Now, **enter Content Delivery Networks (CDNs)**: They're like smaller libraries scattered across your town. Instead of going on a long trip to the main library for every book, you can visit the closest one. CDNs do the same for internet content, storing copies worldwide for quicker access wherever you are.

In simple terms, CDNs make internet stuff faster to get by bringing it closer to you, like having a personal internet speed boost.

## How It Works?

Imagine you are eagaret oread a popular book that many people are also interested in. Instead of everyone going to the _main library_ to borrow the book, the library decides to duplicate copies and distribute them toi small libraries scarrered across the town. These smaller libraraies are conveniently located closer to residential areas, allowing people to access the book more quickly.

1. **Copying Books Everywhere:** The internet stuff—like websites, videos, and pictures—is like the books in the library. CDNs make copies of this stuff and store them in servers all over the world. Each server is like a small library branch.
2. **Getting Your Book Fast:** When you want to read a website or watch a video, instead of going to the main library (which could be far away), you go to the nearest library branch. This branch has a copy of what you want, so you can get it quickly, just like getting your book from the local library instead of traveling across town.
3. **Choosing the Best Route:** The CDN is smart. It looks at where you are and which library branch has the book you want. Then, it sends you to the closest one, so you don't have to wait long. It's like the library telling you which branch has the shortest line to check out your book.
4. **Keeping Your Books Safe:** CDNs also keep your internet stuff safe. They have security measures in place, like guards at the library, to protect against bad guys trying to steal or mess with your stuff.

## Recap

Content Delivery Networks (CDNs) act as distributed mini-libraries, storing content copies globally for faster access. They employ smart routing to deliver content from the nearest server, ensuring speedy performance. Additionally, CDNs implement robust security measures to safeguard digital assets.

## Resources

[What is a CDN (Content Delivery Network)?](https://aws.amazon.com/what-is/cdn/)

## Thank you!

Thank you for your time and for reading this!
