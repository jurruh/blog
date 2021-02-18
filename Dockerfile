FROM node:12 as builder

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html