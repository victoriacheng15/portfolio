---
title: "Exploring uniq - Linux Commands"
description: "Learn how to use the uniq command in Linux to filter out duplicate lines, count occurrences, and print only unique or duplicate lines"
date: 2024-08-24
tags: [linux]
---

## What is the uniq Command in Linux?

The `uniq` command in Linux is a useful utility that filters out or reports repeated lines in a file or standard input. It's typically used to identify or remove duplicate lines, making it easier to manage and analyze data that might contain redundant entries.

Basic syntax:

```bash
uniq [option] [input-file] [output-file]
```

Example:

```bash
uniq file-name
```

## Options

| Option | Description                                             |
| ------ | ------------------------------------------------------- |
| -c     | Precede each output line with the number of occurrences |
| -d     | Only print duplicate lines, one for each group          |
| -u     | Only print unique lines                                 |
| -i     | Ignore differences in case when comparing               |
| -w N   | Compare no more than N characters in a line             |

## Additional Help

You can explore more by using the commands:

```bash
uniq --help
# or
man uniq
```

## Resources

[7 Linux Uniq Command Examples to Remove Duplicate Lines from File](https://www.thegeekstuff.com/2013/05/uniq-command-examples/)

## Thank you!

Thank you for your time and for reading this!
