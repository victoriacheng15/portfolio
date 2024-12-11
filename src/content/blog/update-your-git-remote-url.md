---
title: "Update Your Git Remote URL 🔄"
description: "Learn how to change the remote URL in Git with simple steps. Update your repository's remote address effortlessly to keep your project in sync"
date: 2024-06-06
tags: [git]
---

## What is Git Remote URL?

A git remote URL is an important component in version control. Essential, it acts as a pointer to a remote repository where your project's code is stored. This URL is used to synchronize your local repositry with the remote one, allowing you to push your changes to the server and pull update from it.

When you clone a repository, a remote named `origin` is automatically created, linking your local repository to the remote sources. This URL can be an HTTPS address or an SSH address. By using commands like `git push` , `git pull`, and `git fetch` , you can manage and exchange code between your local enviornment and the remote repository, ensuring that your team stays updated and in sync.

## How to Update or Change Remote URL?

Changing the remote URL in git is a straightfoward process. Here is how you can do it:

- Check the current remote URL:

```bash
git remote -v
```

- Change the remote URL with _HTTPS_:

```bash
git remote set-url origin https://github.com/your-username/your-repo.git
```

- Change the remote URL with _SSH_:

```bash
git remote set-url origin git@github.com:your-username/your-repo.git
```

- Verify the change:

```bash
git remote -v
```

This can be particularly helpful when you change the repository name or if the repository has been moved to a new location.

### How to Find the SSH or HTTPS URL

If you need visual assistance on finding the SSH or HTTPS URL for your repository, watch this short clip:

<iframe width="560" height="315" src="https://github.com/victoriacheng15/victoriacheng15.vercel.app/assets/35031228/d2581d53-a54e-4df0-97b7-521bf61e16bf" frameborder="0" allowfullscreen></iframe>

## Resources

[Managing remote repositories - GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url)

## Thank you!

Thank you for your time and for reading this!
