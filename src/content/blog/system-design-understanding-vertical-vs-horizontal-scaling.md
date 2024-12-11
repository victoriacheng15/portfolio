---
title: "System Design - Understanding Vertical vs Horizontal Scaling"
description: "Explore vertical and horizontal scaling in system design with a water cup analogy. Learn when to grow capacity up or out for optimal performance."
date: 2024-01-09
tags: [system-design]
---

## Understanding Vertical and Horizontal Scaling

When it comes to scaling your system, you have two main strategies:

- Vertical Scaling (scaling up)
- Horizontal Scaling (scaling out)

Let's dive into these approaches using the analogy of a water cup.

## **Vertical Scaling: Growing the Cup**

Vertical scaling, also known as **scaling up.** It is the process of adding more resources or more processing power to a single machine. For example, you can upgrade the CPU and RAM of a server to increase its speed or storage capacity.

Think of a 500ml water cup as your computer system. Pouring 250ml is like using half its capacity (50% load). Adding another 250ml hits the limit; you can't exceed 500ml (vertical scaling limit). To handle more, increase the cup size to 750ml. This is like upgrading your system's capacity to manage higher loads. Vertical scaling means expanding the system's capabilities by increasing its resources.

## **Horizontal Scaling: Multiplying Capacity**

Horizontal scaling, also known as **scaling out.** It is the process of adding more machines or nodes to a system to distribute the workload. For example, you can add more servers to a database, and this allows the database to handle more requests or store more data.

Imagine you have many 500ml cups instead of one. Initially, you pour 250ml into the first cup. If you need more capacity, grab another cup and pour another 250ml. With horizontal scaling, you keep adding more cups as needed, distributing the workload among them. It is like growing your resources by adding more servers. This allows your system more flexible and able to handle increased demands

## Recap

Vertical and horizontal scaling are approaches to handle increased system loads, with the choice depending on factors like resource improvement and load distribution.

- **Vertical Scaling:**
  - **When to Use:** Improve a single machine's capacity by adding more resources.
  - **Use Cases:** CPU-intensive tasks, databases, cost-effective for a powerful machine.
- **Horizontal Scaling:**
  - **When to Use:** Distribute load by adding more machines.
  - **Use Cases:** Web applications with varying traffic, parallel processing, and redundancy.
- **Considerations:**
  - **Cost:** Vertical scaling can get expensive; horizontal scaling is often more cost-effective.
  - **Flexibility:** Vertical scaling may have limitations; horizontal scaling offers better redundancy.
  - **Maintenance:** Vertical scaling may require downtime; horizontal scaling allows rolling upgrades.

## Resources

[Vertical Vs Horizontal Scaling: Key Differences You Should Know by BytwByteGo](https://www.youtube.com/watch?v=dvRFHG2-uYs)

[A Guide to Horizontal vs Vertical Scaling](https://www.mongodb.com/basics/horizontal-vs-vertical-scaling)

[Horizontal vs. Vertical Scaling – How to Scale a Database](https://www.freecodecamp.org/news/horizontal-vs-vertical-scaling-in-database/)

## Thank you!

Thank you for your time and for reading this!
