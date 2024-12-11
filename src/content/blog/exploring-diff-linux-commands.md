---
title: "Exploring diff - Linux Commands"
description: "Compare files with the diff command in Linux. Find differences, ignore whitespace, and more. Learn how to use it effectively with our concise guide."
date: 2024-09-07
tags: [linux]
---

## What is the diff Command in Linux?

The `diff` command in Linux is a powerful tool for comparing files. It displays the differences between two files line by line, showing the changes that would need to be made to one file to make it identical to the other. It is widely used in development for tracking changes between versions of code files or configuration files.

Basic syntax:

```bash
diff [option] file1 file2
```

Compare two files:

```bash
diff file1.txt file2.txt
```

## Options

| Option | Description                                     |
| ------ | ----------------------------------------------- |
| -c     | Output NUM (default 3) lines of copied context  |
| -u     | Output NUM (default 3) lines of unified context |
| -i     | Ignores case differences                        |
| -r     | Recursively compares directories                |
| -w     | Ignores all white space differences             |
| -y     | Outputs a side-by-side comparison               |

## Additional Help

You can explore more by using the commands:

```bash
diff --help
# or
man diff
```

## Thank you!

Thank you for your time and for reading this!
