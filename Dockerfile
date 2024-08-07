FROM node:latest

WORKDIR /home/dockerjs/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
