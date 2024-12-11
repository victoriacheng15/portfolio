---
title: "Exploring less and more - Linux Commands"
description: "Learn about the more and less commands in Linux for paginating file content. Discover their basic syntax, options, and how to get additional help."
date: 2024-07-20
tags: [linux]
---

## What are the more and less Commands in Linux?

The `more` and `less` commands are used to view the contents of text files in a paginated manner. These commands are particularly useful for reading through large files without loading the entire content into memory at once.

Basic Syntax:

By default, both commands will display the contents of the file one screen at a time.

more:

```bash
more [option] [file]
```

less:

```bash
less [option] [file]
```

## Options

- Options for `more`

| Option | Description                                                                                                                   |
| ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| -d     | Prompt with "[Press space to continue, 'q' to quit.]" and display "[Press 'h' for instructions.]" instead of ringing the bell |
| -c     | Clear the screen before displaying the next page                                                                              |
| -s     | Squeeze multiple blank lines into one                                                                                         |
| -u     | Suppress underlining                                                                                                          |

- Options for `less`

| Option | Description                                              |
| ------ | -------------------------------------------------------- |
| -N     | Show line numbers                                        |
| -S     | Chop long lines instead of wrapping                      |
| -X     | Disable termcap init/deinit codes                        |
| -F     | Automatically exit if the entire file fits on one screen |

## Additional Help

You can explore more by using the commands:

```bash
# more
more --help
# or
man more

# less
less --help
# or
man less
```

## Thank you!

Thank you for your time and for reading this!
