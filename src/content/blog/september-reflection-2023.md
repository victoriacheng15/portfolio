---
title: "September Reflection 2023"
description: "Reflected on what I learned from System Design Primer on databases, cache, and application layer. And the 2-minute rule on getting small tasks done ASAP."
date: 2023-09-27
tags: [reflection]
---

## Monthly Reflection

I found the "2-minute rule" in "Getting Thing Done" book to be quite fascinating. This rule is designed to help people deal with small tasks that can be finished within two minutes. The key here is to act promptly on these tasks rather than putting them off. I think this rule is superb because it allows you to efficiently tackle many small tasks, giving you a sense of achievement. Furthermore, if a task can't be completed within two minutes, you have the option to break it down into smaller, manageable steps, or if possible, delegate it to someone else.

I've also dabbled in using time blocks, and I genuinely appreciate the concept of allocating specific time blocks for dedicated focus on particular tasks. I should make better use of this technique by scheduling blocks on my calendar for activities like reading books, exercising, and other tasks. This approach will enable me to concentrate exclusively on one thing during each block.

## Blogs

- [Can't Hurt Me - Embracing Struggle, Achieving the Impossible](https://victoriacheng15.vercel.app/posts/cant-hurt-me-embracing-struggle-achieving-the-impossible)
- [TypeScript Utility Types - Required](https://victoriacheng15.vercel.app/posts/typescript-utility-types-required)
- [TypeScript Utility Types - Record](https://victoriacheng15.vercel.app/posts/typescript-utility-types-record)
- [Clean Architecture - Building Robust Systems](<[https://victoriacheng15.vercel.app/posts/clean-architecture-building-robust-systems](https://victoriacheng15.vercel.app/posts/typescript-utility-types-required)>)
- [TypeScript Utility Types - Exclude](https://victoriacheng15.vercel.app/posts/typescript-utility-types-exclude)
- [Ultralearning: Accelerated Learning Strategies](https://victoriacheng15.vercel.app/posts/ultralearning-accelerated-learning-strategies)

## Books

- `SQL Cookbook` by Anthony Molinaro: Interested in exploring the capabilities of SQL's built-in functions, as well as a few alternative methods when these functions fall short? This is definitely a book worth revisiting for future reference.
- `The Unfair Advantage` by Ash Ali: A concise yet impactful guide that illuminates the path to leveraging your distinct strengths for a competitive edge. Ali's expert insights and practical strategies offer a blueprint for success in today's fast-paced world.
- `Eat that Frog` by Brain Tracy: Provide practical advice and strategies for overcoming procrastination, managing time effectively, and achieving greater productivity.

## System Design Primer

**Load Balancer:**

- Distributes client requests to resources like servers.
- Prevents overloading and single points of failure.

**Reverse Proxy (Web Server):**

- Centralizes services and provides unified interfaces.
- Increases security, scalability, SSL termination, caching.
- Serves static content, compresses, and manages requests.

**Application Layer:**

- Separates web and application layers for independent scaling.
- Utilizes microservices, independently deployable.
- Service discovery helps services find each other.

**Database:**

- Master-slave replication: Master serves reads/writes, slaves read-only.
- Master-master replication: Both masters serve reads/writes.
- Sharding distributes data across databases.

**Cache:**

- Improves page load times, reduces server/database load.
- Client, CDN, web server, database, application caching.

**Asynchronism:**

- Reduces request times for expensive operations.
- Message queues and task queues manage workflows.

**Communication:**

- **HTTP**: Request/response protocol for client-server communication.
- **TCP**: Connection-oriented, reliable protocol with sequence numbers.
- **UDP**: Connectionless, less reliable, more efficient.
- **RPC**: Client triggers remote procedure execution.
- **REST**: Client/server model with stateless communication.

## Threejs

- **Scroll-based animation**: Creating a scroll-based animation where users can scroll downwards to reveal distinct 3D objects with particles in the background. [Demo](https://victoriacheng15.github.io/three-js-demo/12-scroll-based-animation/)
- **Water Texture**: Generating a water texture with texture images that display a water material and permits users to adjust parameters like displacement scale, ambient occlusion intensity, and more. [Demo](https://victoriacheng15.github.io/three-js-demo/13-water-texture/)

## Thank you!

Thank you for your time and for reading this!
