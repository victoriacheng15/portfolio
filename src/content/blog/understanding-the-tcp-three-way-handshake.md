---
title: "Understanding the TCP Three-Way Handshake"
description: "Explore the TCP 3-way handshake, a crucial step for reliable internet communication. Learn how it ensures accurate data transfer and stable connections."
date: 2024-11-05
tags: [system-design]
---

## What is a TCP Three-Way Handshake?

The **Transmission Control Protocol (TCP)** is an important part of how computers communicate over the Internet. It helps ensure that data is sent and received correctly. TCP takes large pieces of information and breaks them into smaller packets. It then sends these packets over the network and ensures they arrive in the right order and without mistakes. This reliability is important for many internet activities, like browsing websites or sending emails.

One important process in TCP is the **3-way handshake**. This is a way to create a connection between a client and a server before they start sharing data. If you have ever wondered how your computer knows it is sending and receiving information correctly, the 3-way handshake is a big part of the answer.

For more context on TCP and how it compares to UDP, check out the post [Understanding the Difference Between TCP and UDP](https://victoriacheng15.vercel.app/posts/understanding-the-difference-between-tcp-and-udp).

## Steps of the TCP Three-Way Handshake

The three-way handshake consists of three key steps: **SYN**, **SYN-ACK**, and **ACK**. Each step plays a crucial role in building a reliable connection between two devices.

- **SYN (Synchronize)**

The first step starts when the client wants to initiate a connection. The client sends a **SYN** packet to the server, indicating its desire to establish a connection. This packet contains an initial sequence number, which will help in ordering the transmitted data.

Example => Client sends: `SYN (Seq=100)`

- **SYN-ACK (Synchronize-Acknowledge)**

The server responds to the client’s SYN packet by sending back a **SYN-ACK** packet. This packet acknowledges the client’s request and indicates that the server is ready to establish a connection. The SYN-ACK packet also contains the server's own sequence number.

Example => Server sends: `SYN-ACK (Seq=300, Ack=101)`

- **ACK (Acknowledge)**

Finally, the client sends an **ACK** packet to confirm that it received the server's SYN-ACK packet. Once the server gets this acknowledgment, the connection is fully established, and data can be transferred between the client and server.

Example => Client sends: `ACK (Ack=301)`

After these three steps, the connection is officially open, and data can begin flowing in both directions. If any part of this process fails, the handshake will be retried, ensuring a reliable connection is only established when both sides are ready.

## Why is the TCP Three-Way Handshake Important?

The three-way handshake serves as the foundation for reliable communication over the Internet. Here’s why it’s so important:

- **Reliability**: The handshake ensures that both the client and server are synchronized, avoiding issues like data loss or misordering during transmission.
- **Connection Integrity**: It verifies that both sides are ready and able to communicate before any actual data is sent, preventing wasted resources on failed transmissions.

By understanding these key points, we can appreciate how the TCP 3-way handshake creates a stable and reliable foundation for internet communications.

## Recap

The TCP 3-way handshake is a simple yet vital process that ensures reliable communication between devices. Through the SYN, SYN-ACK, and ACK steps, the handshake guarantees that the client and server are ready to transmit data, creating a stable and secure connection.

Imagine it like two people agreeing to meet for coffee:

- First, one person sends an invitation, "Hey, let's meet at 3 PM" (SYN).
- The second person replies, "Got it, 3 PM works for me. Are you confirmed?" (SYN-ACK).
- Finally, the first person confirms, "Yes, I'll see you at 3" (ACK).
- Both people know the meeting is set, and they can proceed as planned.

Similarly, the TCP 3-way handshake ensures both devices are aligned and ready to exchange data. Like in the coffee meetup, this process ensures everything is agreed upon before communication starts, making the internet reliable and orderly.

## Resources

[What Is a Three-Way Handshake? by Coursera](https://www.coursera.org/articles/three-way-handshake)

[What is a TCP 3-Way Handshake? by Think Cloudly](https://thinkcloudly.com/blogs/cyber-security/tcp-3-way-handshake/)

## Thank you!

Thank you for your time and for reading this!
