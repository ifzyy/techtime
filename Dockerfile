FROM node:16.15.0-alpine

WORKDIR /techtime

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]