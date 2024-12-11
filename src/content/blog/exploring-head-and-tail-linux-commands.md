---
title: "Exploring head and tail - Linux Commands"
description: "Discover the head and tail commands in Linux. Discover their syntax and options to view the start and end of files efficiently. Level up your Linux knowledge!"
date: 2024-07-06
tags: [linux]
---

## What are the head and tail Commands in Linux?

The `head` and `tail` commands are used to display the **beginning** and **end** sections of a file, respectively. These commands are useful for quickly viewing the contents of a file without opening it in an editor.

Basic Syntax:

By default, both commands will display the **first** or **last** 10 lines of file contents respectively.

head:

```bash
head [option] [file]
```

tail:

```bash
tail [option] [file]
```

## Options

- Options for `head`

| Option | Description |
| --- | --- |
| -n, --lines | Print the first n lines instead of the first 10 |
| -c, --bytes | Print the first c bytes of each file |
| -q, --quiet, --silent | Never print headers giving file names |
| -v, --verbose | Always print headers giving file names |
- Options for `tail`

| Option | Description |
| --- | --- |
| -n, --lines | Print the first n lines instead of the first 10 |
| -c, --bytes | Print the first c bytes of each file |
| -f, --follow | Output appended data as the file grows |
| -q, --quiet, --silent | Never print headers giving file names |
| -v, --verbose | Always print headers giving file names |

## Additional Help

You can explore more by using the commands:

```bash
# head
head --help
# or
man head

# tail
tail --help
# or
man tail
```

## Thank you!

Thank you for your time and for reading this!