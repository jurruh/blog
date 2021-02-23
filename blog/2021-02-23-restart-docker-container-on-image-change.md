---
slug: restart-docker-container-on-image-change
title: Restart Docker container on image change
tags: [docker, docker-compose, watchtower]
---

This blog is a static website served from Docker container. The content is written in markdown and pushed to a Git repository hosted on [GitHub](https://github.com/jurruh/blog). Every time I push to that repository a Docker image containing the new version is build on [DockerHub](https://hub.docker.com/repository/docker/jurruh/blog/builds).

However, even if the new image is available on DockerHub there is still a container running containing the old version. Normally I would go to the platform where the container is running and perform a manual `docker pull` command and spin up the new container. I hated doing this manual step and automated it:

:point_right: The people from [containrrr.dev](https://containrrr.dev/) made a simple to use piece of software called watchtower. This detects if the image of a container is changes and if so the image is pulled and the container is restarted. Watchtower can be started as an individual Docker container with the following command:
```shell
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower <name of the container to watch : optional>
```
:notebook: if no name is given all containers are watched.

I like to configure and document my containers with a docker-compose file. This is also supported by watchtower.

```yaml
version: "3"
services:
  cavo:
    image: jurruh/blog:latest
    container_name: jurruh_blog
    ports:
      - "80:80"
  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: jurruh_blog
```