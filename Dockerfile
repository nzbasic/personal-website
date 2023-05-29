FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
RUN npm i -g serve
COPY . .
RUN npm run build
CMD [ "serve", "-s", "build" ]