(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(92)),i=["components"],c={slug:"restart-docker-container-on-image-change",title:"Restart Docker container on image change",tags:["docker","docker-compose","watchtower"]},s={permalink:"/restart-docker-container-on-image-change",source:"@site/blog/2021-02-23-restart-docker-container-on-image-change.md",description:"This blog is a static website served from a Docker container. The content is written in markdown and pushed to a Git repository hosted on GitHub. Every time I push to that repository a Docker image containing the new version is build on DockerHub.",date:"2021-02-23T00:00:00.000Z",tags:[{label:"docker",permalink:"/tags/docker"},{label:"docker-compose",permalink:"/tags/docker-compose"},{label:"watchtower",permalink:"/tags/watchtower"}],title:"Restart Docker container on image change",readingTime:1.085,truncated:!1,prevItem:{title:"Ansible boilerplate for webapps with Docker, Traefik and Let's Encrypt",permalink:"/ansible-boilerplate-for-webapps"}},l=[],d={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This blog is a static website served from a Docker container. The content is written in markdown and pushed to a Git repository hosted on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jurruh/blog"},"GitHub"),". Every time I push to that repository a Docker image containing the new version is build on ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/jurruh/blog/builds"},"DockerHub"),"."),Object(o.b)("p",null,"While the new image is available on DockerHub there is still a container running containing the old version. Normally I would go to the server where the container is running and perform a manual ",Object(o.b)("inlineCode",{parentName:"p"},"docker pull")," command and spin up a new container. I hated doing this manual step and automated it:"),Object(o.b)("p",null,"\ud83d\udc49 The people from ",Object(o.b)("a",{parentName:"p",href:"https://containrrr.dev/"},"containrrr.dev")," made a simple to use piece of software called watchtower. This detects when the image of a container changes. When that happens the changed image is pulled and the container will be restarted. Watchtower can be started as an individual Docker container with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  --name watchtower \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  containrrr/watchtower <name of the container to watch : optional>\n")),Object(o.b)("p",null,"\ud83d\udcd3 if no name is given all containers are watched."),Object(o.b)("p",null,"I like to configure and document my containers with a docker-compose file. This is also supported by watchtower."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  cavo:\n    image: jurruh/blog:latest\n    container_name: jurruh_blog\n    ports:\n      - "80:80"\n  watchtower:\n    image: containrrr/watchtower\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    command: jurruh_blog\n')))}p.isMDXComponent=!0}}]);