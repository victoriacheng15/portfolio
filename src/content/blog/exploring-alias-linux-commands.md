---
title: "Exploring alias - Linux Commands"
description: "Discover the power of Linux commands with our guide on using 'alias.' Streamline your workflow and explore awesome tips for efficient terminal operations."
date: 2024-01-18
tags: [linux]
---

## What is an alias command?

In Linux, the `alias` command is used to create a shortcut or custom commands for longer and more complete commands. It allows you to define your command names or abbreviations for existing commands or sequences of commands. This can be particularly useful to save time and reduce the amount of typing required for frequently used commands.

The basic syntax of the `alias` command:

```bash
alias new_command="original_command"
```

## Temporary alias:

A temporary alias is designed for short-term use within the current session. It serves as a quick, one-time shortcut for specific commands. However, please note that the alias is only available for the duration of the open terminal session and is lost when the terminal is closed.

If you wish to create a temporary alias named **`night`** that prints "good night" in the terminal, you can use the following command:

```bash
alias night='echo "good night"'
```

Now, you can run the `night` command directly in your terminal and this alias will be active only for the current session, providing a convenient shortcut for the duration of your terminal use.

## Permanent alias:

A permanent alias serves as a convenient shortcut for long-term use, persisting across various sessions in your terminal. To establish a permanent alias, you need to integrate the alias command into the configuration file linked to your terminal. It's essential to select the appropriate configuration file based on your current shell.

### For Bash Users:

If Bash is your shell of choice, you'll find the configuration file at `~/.bashrc`. To create a permanent alias, execute the following commands:

```bash
echo 'alias bye="echo \"good night\""' >> ~/.bashrc
source ~/.bashrc
```

### For Zsh Users:

Zsh users, on the other hand, need to tweak the code block slightly. Replace `.bashrc` with `.zshrc` to make the alias configuration compatible with Zsh:

```bash
echo 'alias bye="echo \"good night\""' >> ~/.zshrc
source ~/.zshrc
```

Ensure that you adapt the file path according to your specific shell. These modifications will make your chosen alias available every time you launch a new terminal session.

## Recap

The Linux `alias` command transforms command-line tasks by simplifying complex or common instructions through efficient shortcuts. For instance, instead of typing the `clear` command to clear the terminal, you can create an alias like `c`. These aliases persist across sessions, ensuring lasting efficiency. Just add them to shell configuration files like `~/.bashrc` or `~/.zshrc`. In essence, `alias` streamlines and personalizes your Linux terminal experience.

I've added a couple of links below that lead to fantastic and practical alias ideas for you to explore. 😎

## Resources

[Linux Command - alias](https://linuxcommand.org/lc3_man_pages/aliash.html)

[Master The Command Line With Useful Bash Aliases In Linux And Unix](https://ostechnix.com/useful-bash-aliases/)

[awesome-bash-alias](https://vikaskyadav.github.io/awesome-bash-alias/)

## Thank you!

Thank you for your time and for reading this!
