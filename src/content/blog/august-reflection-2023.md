---
title: "August Reflection 2023"
description: "Reflected on what I learned from System Design Primer, a containerized app with docker, Threejs - lighting/effects, and the concept of doing the pilot week."
date: 2023-08-30
tags: [reflection]
---

## Monthly Reflection

Since May, I've been utilizing Notion for organizing my tasks. Initially, I allocated 5 tasks for each day, including Saturdays. However, after a couple of weeks, I recognized that this was overly ambitious. 😅 As a result, I scaled it back to 2 or 3 tasks per day. If I happen to have surplus time, I may even begin tackling tasks scheduled for the next day or engage in some book reading. Additionally, I intentionally leave Saturdays and Sundays empty beside publish posts, as I consider these days to be for recharging or being lazy.

Scott Young, the author of the Ultralearning book, brings up an insightful concept that strongly resonates with me. He recommends the idea of starting with a pilot week for your schedule before fully committing to it. This strategy grants you direct exposure to the challenges you might face and enables you to make any required modifications. This idea reminds me of my past experience in my former career. At my previous workplace, which revolved around manufacturing cosmetics, we operated a designated production area for assembling products. Each time we introduced a new product, we conducted a trial run to identify any necessary adjustments, such as temperature or belt speed, before finalizing the setup. This preliminary testing helped us avoid potential issues and ensure smoother operations.

## Blogs

- [Living the Life with The Subtle Art of Not Giving a Fk](https://victoriacheng15.vercel.app/posts/living-the-life-with-the-subtle-art-of-not-giving-a-fk)
- [TypeScript Utility Types - Pick](https://victoriacheng15.vercel.app/posts/typescript-utility-types-pick)
- [Unlocking Your Second Brain - Enhanced Learning & Innovation](https://victoriacheng15.vercel.app/posts/unlocking-your-second-brain-enhanced-learning-innovation)
- [TypeScript Utility Types - Readonly](https://victoriacheng15.vercel.app/posts/typescript-utility-types-readonly)
- [Obstacle Is the Way - Transforming Challenges into Success](https://victoriacheng15.vercel.app/posts/obstacle-is-the-way-transforming-challenges-into-success)
- [JavaScript Generators](https://victoriacheng15.vercel.app/posts/javascript-generator)
- [Insights from Software Engineering at Google Book](https://victoriacheng15.vercel.app/posts/insights-from-software-engineering-at-google-book)
- [React Hooks - useRef](https://victoriacheng15.vercel.app/posts/react-hooks-useref)
- [How to Win Friends and Influence People - Modern Insights](https://victoriacheng15.vercel.app/posts/how-to-win-friends-and-influence-people-modern-insights)

## Books

- `Can’t Hurt Me` by David Goggins - a raw and inspiring journey from adversity to triumph. As a Navy SEAL and ultra-endurance athlete, he shares actionable insights to push past limits, embrace discomfort, and achieve greatness. This book empowers readers with relentless determination and the ability to unlock their fullest potential.
- `Clean Architecture A Craftsmans Guide to Software Structure and Design-Pearson Education` by Robert Martin - a transformative approach to designing software systems. Learn to enhance maintainability, foster scalability, and craft robust solutions. Delve into architectural principles that stand the test of time and elevate your software development skills
- `Ultralearning Master Hard Skills, Outsmart the Competition, and Accelerate Your Career` by Scott Young - offer actionable insights into not only mastering hard skills efficiently but also gaining a distinct advantage in a competitive world.

## System Design Primer

**Performance vs Scalability:**

- **Vertical Scaling**: Upgrading resources on a single server.
- **Horizontal Scaling**: Distributing workload across multiple servers.
- **Cache**: High-speed data storage layer for frequently accessed data.
- **Load Balancing**: Distributing traffic across multiple servers for performance.
- **Database Replication**: Duplicate copies on multiple servers for redundancy.
- **Database Partitioning**: Dividing large databases for scalability.
- **Asynchronism**: Independent tasks for improved performance.

**Latency vs Throughput:**

- **Latency**: Time taken to perform an action.
- **Throughput**: Number of actions executed per unit time.
- Example: Car manufacturing latency vs throughput.

**Availability vs Consistency:**

- **Consistency**: Reads receive recent writes or errors.
- **Availability**: Every request receives a response.
- **Partition Tolerance**: System operates despite network partitions.
- **CP (Consistency/Partition Tolerance)**: Good for atomic reads and writes.
- **AP (Availability/Partition Tolerance)**: Returns recent data, potentially stale.

**Consistency Patterns:**

- **Weak Consistency**: Reads may not see recent writes.
- **Eventual Consistency**: Reads eventually see writes.
- **Strong Consistency**: Reads immediately see writes.

**Availability Patterns:**

- **Fail-over**: Active-passive or active-active setup.
- **Active-Passive**: Passive takes over on failure.
- **Active-Active**: Both servers manage traffic.
- **Replication**: Cloning databases for redundancy.
- **Availability in Numbers**: Uptime measured in percentage.

**Domain Name System:**

- **DNS**: Translates domain names to IP addresses.
- **Round Robin**: Distributes requests to servers evenly.
- **Weighted Round Robin**: Considers server capabilities.
- **Least Connections**: Routes to server with fewer connections.
- **Weight Least Connections**: Considers capacity and load.
- **Random**: Matches clients and servers randomly.

**Content Delivery Network:**

- **CDN**: Globally distributed proxy servers for content.
- **Static Content**: HTML/CSS/JS, photos, and videos served.
- **Performance Improvement**: Users receive content closer, offloading servers.
- **Push CDNs**: You manage content updates.
- **Pull CDNs**: Content fetched on user request.

[The System Design Primer](https://github.com/donnemartin/system-design-primer#readme)

## Docker

I learned that there are 2 ways to run node with docker with the ability to reload the page when one of the files is changed.

- 👉 Running the container with docker build and run
- 👉 Running the container with docker-compose file

[LinkedIn post - how to run node with docker](https://www.linkedin.com/posts/victoriacheng15_coding-programming-softwareengineering-activity-7095410750940172289-iqdQ?utm_source=share&utm_medium=member_desktop)

[node-docker-sandbox repo](https://github.com/victoriacheng15/node-docker-sandbox)

## Threejs

This collection of links provides information and demonstrations on various types of lighting and particle effects in the context of Three.js, a popular JavaScript library for 3D graphics. It covers different light sources and their behaviors, including:

- **Directional Light:** Emitting light in a specified direction as if originating infinitely far away with parallel rays. [Demo](https://victoriacheng15.github.io/three-js-demo/4-directional-light/)
- **Hemisphere Light:** Positioned above a scene, with color transitioning from sky to ground. [Demo](https://victoriacheng15.github.io/three-js-demo/5-hemisphere-light/)
- **Point Light:** Emitting light uniformly from a single point in all directions, simulating a bare lightbulb. [Demo](https://victoriacheng15.github.io/three-js-demo/6-point-light/)
- **Rect Area Light:** Distributing light evenly across a rectangular plane, useful for replicating windows or strip lighting. [Demo](https://victoriacheng15.github.io/three-js-demo/7-rect-area-light/)
- **Spot Light:** Emitting light from a single point within a cone, with the cone's angle widening further from the light source. [Demo](https://victoriacheng15.github.io/three-js-demo/4-directional-light/)
- **Shadows:** Three types of lights supporting shadow generation: directional, spot, and point lights. [Demo](https://victoriacheng15.github.io/three-js-demo/9-shadows/) | [DirectionalLightShadow Docs](https://threejs.org/docs/index.html?q=shadow#api/en/lights/shadows/DirectionalLightShadow) | [SpotLightShadow Docs](https://threejs.org/docs/index.html?q=shadow#api/en/lights/shadows/SpotLightShadow) | [PointLightShadow Docs](https://threejs.org/docs/index.html?q=shadow#api/en/lights/shadows/PointLightShadow)
- **Particles:** Creating particle effects using **`BufferGeometry`** to achieve a galaxy-like appearance. [Demo](https://victoriacheng15.github.io/three-js-demo/10-particles/) | [BufferGeometry Docs](https://threejs.org/docs/index.html?q=point#api/en/core/BufferGeometry) | [PointsMaterial Docs](https://threejs.org/docs/index.html?q=point#api/en/materials/PointsMaterial)

## Thank you!

Thank you for your time and for reading this!
