(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(96)),c={slug:"restart-docker-container-on-image-change",title:"Restart Docker container on image change",tags:["docker","docker-compose","watchtower"]},i={permalink:"/restart-docker-container-on-image-change",source:"@site/blog/2021-02-23-restart-docker-container-on-image-change.md",description:"This blog is a static website served from a Docker container. The content is written in markdown and pushed to a Git repository hosted on GitHub. Every time I push to that repository a Docker image containing the new version is build on DockerHub.",date:"2021-02-23T00:00:00.000Z",tags:[{label:"docker",permalink:"/tags/docker"},{label:"docker-compose",permalink:"/tags/docker-compose"},{label:"watchtower",permalink:"/tags/watchtower"}],title:"Restart Docker container on image change",readingTime:1.085,truncated:!1,prevItem:{title:"Ansible boilerplate for webapps with Docker, Traefik and Let's Encrypt",permalink:"/ansible-boilerplate-for-webapps"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This blog is a static website served from a Docker container. The content is written in markdown and pushed to a Git repository hosted on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/jurruh/blog"},"GitHub"),". Every time I push to that repository a Docker image containing the new version is build on ",Object(a.b)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/jurruh/blog/builds"},"DockerHub"),"."),Object(a.b)("p",null,"While the new image is available on DockerHub there is still a container running containing the old version. Normally I would go to the server where the container is running and perform a manual ",Object(a.b)("inlineCode",{parentName:"p"},"docker pull")," command and spin up a new container. I hated doing this manual step and automated it:"),Object(a.b)("p",null,"\ud83d\udc49 The people from ",Object(a.b)("a",{parentName:"p",href:"https://containrrr.dev/"},"containrrr.dev")," made a simple to use piece of software called watchtower. This detects when the image of a container changes. When that happens the changed image is pulled and the container will be restarted. Watchtower can be started as an individual Docker container with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"docker run -d \\\n  --name watchtower \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  containrrr/watchtower <name of the container to watch : optional>\n")),Object(a.b)("p",null,"\ud83d\udcd3 if no name is given all containers are watched."),Object(a.b)("p",null,"I like to configure and document my containers with a docker-compose file. This is also supported by watchtower."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  cavo:\n    image: jurruh/blog:latest\n    container_name: jurruh_blog\n    ports:\n      - "80:80"\n  watchtower:\n    image: containrrr/watchtower\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    command: jurruh_blog\n')))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);