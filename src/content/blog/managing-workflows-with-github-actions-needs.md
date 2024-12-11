---
title: "Managing Workflows with GitHub Actions: needs"
description: "Efficiently manage workflows in GitHub Actions by leveraging the “needs” syntax for job control."
date: 2024-02-06
tags: [ci-cd]
---

## What is the “needs” syntax?

While watching the 'Learning GitHub Actions' course on LinkedIn Learning, I stumbled upon the `needs` syntax. This revelation proved incredibly useful. In GitHub Actions, 'needs' defines dependencies between jobs, ensuring a job waits for the completion (success or failure) of specified tasks before starting.

Example:

```yaml
name: runner

on:
  pull_request:
    branches: [main]

jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
			# do stuff
	job2:
    needs: [job1]
    runs-on: ubuntu-latest
    steps:
			# If job1 is completed then do stuff

```

This syntax ensures that _job2_ will only start its execution if _job1_ has been completed successfully. Furthermore, if you have _job3_, which depends on both _job1_ and _job2_, you can express this dependency by adding `needs: [job1, job2]` to the configuration of _job3_.

Example:

```yaml
  job3:
    needs: [job1, job2]
		runs-on: ubuntu-latest
    steps:
			# If job1and job2 are completed then do stuff
```

## Resources

[GitHub Docs - needs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)

## Thank you!

Thank you for your time and for reading this!
