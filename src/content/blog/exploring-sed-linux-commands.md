---
title: "Exploring sed - Linux Commands"
description: "Learn how to use the sed command in Linux for text manipulation, including substitution, deletion, and insertion, with common use cases and helpful options."
date: 2024-09-14
tags: [linux]
---

## What is the sed Command in Linux?

The `sed` (stream editor) command in Linux is a powerful tool used for text manipulation. It can perform various text operations, such as substitution, deletion, and insertion, on files or streams of data. It is often used for automation in shell scripts to modify files or input without needing to open an editor.

Basic syntax:

```bash
sed [options] 'command' file
```

Replace a string in a file:

```bash
sed 's/old_string/new_string/' file.txt
```

## Options

| Option | **Description**                                                       |
| ------ | --------------------------------------------------------------------- |
| -n     | Suppresses automatic output, useful when you only want specific lines |
| -e     | Allows multiple commands to be executed                               |
| -i     | Modifies the file in place (saves changes directly to the file)       |
| -r     | Enables extended regular expressions in the script                    |

## Common Use Cases

### 1. Substitution

The most common operation in `sed` is substitution, which replaces one string with another:

```bash
sed 's/old/new/' file.txt
```

To replace all occurrences on a line, use the `g` (global) flag:

```bash
sed 's/old/new/g' file.txt
```

### 2. Delete Lines

You can delete specific lines from a file:

```bash
sed '2d' file.txt    # Deletes line 2
sed '5,10d' file.txt # Deletes lines 5 through 10
```

### 3. Inserting or Appending Text

Insert or append text to specific lines:

```bash
sed '3i\Inserted text' file.txt    # Inserts "Inserted text" before line 3
sed '3a\Appended text' file.txt    # Appends "Appended text" after line 3
```

## Additional Help

You can explore more by using the commands:

```bash
sed --help
# or
man sed
```

## Resources

[Ten sed command examples](https://4sysops.com/archives/ten-sed-command-examples/)

[15 Useful ‘sed’ Command Tips and Tricks for Linux SysAdmins](https://www.tecmint.com/linux-sed-command-tips-tricks/)

## Thank you!

Thank you for your time and for reading this!
