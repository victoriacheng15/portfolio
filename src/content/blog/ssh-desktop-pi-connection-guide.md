---
title: "SSH & Desktop - Pi Connection Guide"
description: "Unlock the full potential of your Raspberry Pi with our step-by-step guides for remote desktop, SSH, and file transfers. Elevate your Pi experience today!”"
date: 2024-02-08
tags: [linux, raspberry-pi]
---

## Intro

I've had a Raspberry Pi for a while and decided to explore more ways to use it for fun and experiments this year. Initially, I had it connected to another monitor, keyboard, and mouse, which cluttered my desk. 😅 While I knew about remote desktops and SSH, I hadn't delved into them until last week when I decided to simplify my setup.

First things first, you need to find out the IP address of your Raspberry Pi. This will be crucial for establishing both remote desktop and SSH connections.

```bash
hostname -I | cut -d' ' -f1
```

This will display the PI’s IP address.

Note: this guide is tailored for Linux desktop users, with a focus on Ubuntu. Whether you're a seasoned Linux user or just starting, follow along to discover how to enhance your Raspberry Pi experience with remote desktop and SSH connections!

## Setting Up Remote Desktop Access for Pi

- Install `xrdp` on the Raspberry PI by typing `sudo apt install xrdp`
- Install Remmina, a remote desktop client on the host computer
- Click the add sign
- Name the device `Raspberry Pi` or any name that you would like
- Pick the `RDP - Remote Desktop Protocol` in the Protocol section
- Type the IP address in the `Server` section
- Click save and connect

For a visual walkthrough, you can consult this guide on [RDP connection using Remmina](https://remmina.org/remmina-rdp/).

## SSH for Terminal Access to Pi

- Open terminal
- `ssh pi_username@ip_address`
- When prompted for the password, enter the Pi’s password
- Once the terminal name is changed to Pi’s username, the connection is successful!

### Bonus

Additionally, I discovered the ability to transfer files from the host computer to the Pi using the `scp` command In this case, the “path” refers to the folder where you want to move the file to.

```bash
scp path/file.txt pi_username@ip_address:path/file.txt
```

## Resources

[Remmina](https://remmina.org/)

## Thank you!

Thank you for your time and for reading this!
