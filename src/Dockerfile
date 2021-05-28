FROM node:12.9.1-buster-slim

WORKDIR /app

ADD . /app

RUN npm install

EXPOSE 3000 

ENTRYPOINT [ "npm", "start" ]