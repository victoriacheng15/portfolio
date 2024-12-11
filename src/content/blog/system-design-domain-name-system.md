---
title: "System Design - Domain Name System"
description: "Explore the vital role of DNS in transforming domain names into IP addresses. Learn the process from typing to accessing websites on the internet"
date: 2024-03-12
tags: [system-design]
---

## What is Domain Name System?

The Domina Name System is a pivotal element of the broader system design, responsible for translating human-readable domain names into numerical IP addresses that computers use to identify each other on the internet. In simpler terms, DNS acts as the digital directory that facilitates the communication between your browser and the web servers hosting your favorite websites.

## How does DNS work?

Ever wondered about the magic that happens behind the scenes when you type a website address into your browser? This experience is powered by the Domain Name System (DNS), a vital component of the internet's architecture.

Let's take a journey through the steps involved in resolving a familiar domain like [www.google.com](http://www.google.com/).

1. **User Input:**
   - Imagine you want to visit Google, so you type "[www.google.com](http://www.google.com/)" into your browser's address bar.
2. **DNS Query:**
   - Your computer initiates a DNS query, asking the DNS resolver for the IP address associated with "[www.google.com](http://www.google.com/)."
3. **DNS Resolution:**
   - The resolver first checks its local cache for a quick answer. If not found, it proceeds to the next step.
4. **Root DNS Server:**
   - The resolver contacts the root DNS server, which, although not aware of "[www.google.com](http://www.google.com/)," directs it to the ".com" top-level domain (TLD) server.
5. **TLD DNS Server:**
   - The TLD server, responsible for ".com" domains, guides the resolver to the authoritative DNS server for "google.com."
6. **Authoritative DNS Server:**
   - Here, the magic happens. The authoritative DNS server for "google.com" provides the resolver with the exact IP address for "[www.google.com](http://www.google.com/)."
7. **DNS Response:**
   - Armed with the IP address, the resolver sends the information back to your computer.
8. **Website Access:**
   - Your computer now knows where to find Google's servers. It establishes a connection, and voilà – you seamlessly access "[www.google.com](http://www.google.com/)."

## TL;DR:

When you type "[www.google.com](http://www.google.com/)" in your browser, your computer goes through a process involving DNS queries to find the IP address. It checks local cache, consults root and top-level domain servers, reaches the authoritative DNS server for "google.com," gets the IP address, and finally, your computer can access Google's servers.

## Resources

[How DNS works](https://howdns.works/)

[What is DNS? | How DNS works](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)

[Domain Name System 101 Miniseries](https://www.youtube.com/watch?v=zEmUuNFBgN8&list=PLTk5ZYSbd9MhMmOiPhfRJNW7bhxHo4q-K)

## Thank you!

Thank you for your time and for reading this!
