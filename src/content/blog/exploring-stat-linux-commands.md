---
title: "Exploring stat - Linux Commands"
description: "Explore the Linux stat command for comprehensive insights: View detailed file information, sizes, permissions, and file system status effortlessly."
date: 2024-03-05
tags: [linux]
---

## What is stat command?

The `stat` command in Linux is used to display detaailed information about a file or a file system. It provides various options to customize the output.

```bash
stat [option] example.txt
```

Outputs:

```bash
  File: example.txt
  Size: 11         	Blocks: 8          IO Block: 4096   regular file
Device: 8dh/141d	Inode: 16122795    Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2024-03-04 02:46:31.029094886 +0000
Modify: 2024-03-04 02:46:31.029094886 +0000
Change: 2024-03-04 02:46:31.029094886 +0000
```

1. **File: example.txt**
   - This line displays the name of the file for which the information is being presented.
2. **Size: 4096**
   - The `Size` field shows the size of the file in bytes. In this example, the file is 4096 bytes (4 KB) in size.
3. **Blocks: 8**
   - The `Blocks` field indicates the actual disk allocation for the file in 512-byte blocks. Here, the file is allocated 8 blocks on the disk.
4. **IO Block: 4096**
   - The `IO Block` field specifies the block size used for input and output operations. In this case, it's 4096 bytes.
5. **regular file**
   - This line indicates that the file is a regular file. If it is directory, it would show `directory` instead.
6. **Device: 801h/2049d**
   - The `Device` field shows the device identifier where the file is located. "801h" is the hexadecimal representation, and "2049d" is the decimal representation.
7. **Inode: 123456**
   - The `Inode` field displays the inode number associated with the file. An inode is a unique identifier for the file in the file system.
8. **Links: 1**
   - The `Links` field represents the number of hard links to the file. In this case, there is only one link to the file.
9. **Access: (0644/-rw-r--r--)**
   - The `Access` field shows the access permissions of the file in both numeric and symbolic formats. Here, the file has read and write permissions for the owner and read-only permissions for the group and others.
10. **Uid: (1000/username)**
    - The `Uid` field indicates the user ID (numeric and username) of the file owner.
11. **Gid: (1000/groupname)**
    - The `Gid` field indicates the group ID (numeric and groupname) of the file's group.
12. **Access:**
    - The `Access` field shows the last access time of the file.
13. **Modify:**
    - The `Modify` field displays the last modification time of the file.
14. **Change:**
    - The `Change` field shows the last status change time of the file.
15. **Birth: -**
    - The `Birth` field may not be available or relevant on all file systems. It represents the creation time of the file, but not all file systems support this information.

If you want to learn more about the `stat` command and its options directly in the terminal, you can use the `man` command for the manual.

```bash
man stat
```

## Thank you!

Thank you for your time and for reading this!
