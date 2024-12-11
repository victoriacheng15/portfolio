---
title: "Docker Compose - Configuring Images and Container Names"
description: "Enhance Docker deployment with custom names for organized images and containers. Explore efficient file transfers using the 'docker cp' command."
date: 2024-02-01
tags: [docker]
---

## Configuring names for an image and container

Before establishing names for both the Docker image and container, my lists of Docker images and containers were disorderly and challenging to comprehend due to their extended, unclear names. Recognizing the need for organization, I consulted GPT to inquire about potential solutions. GPT confirmed that it is possible to configure names. Additionally, I cross-referenced the information provided by GPT with the Docker Documentation to ensure that the guidance was up-to-date.

Example:

```yaml
# docker-compose.yaml
version: "3"
services:
	app:
		image: your_image_name # 👈
		container_name: your_container_name # 👈
		build:
			# do stuff
```

## Bonus

To move a file or folder from the host machine to the container, utilize the `docker cp` command. If you intend to transfer a folder, substitute `file.txt` with the name of the folder.

Example:

```bash
docker cp file.txt container_id:path/file.txt
#or
docker cp folder container_id:path/folder
```

## Resources

[Docker Docs - Docker Compose](https://docs.docker.com/compose/compose-file/compose-file-v3/)

## Thank you!

Thank you for your time and for reading this!
