FROM node:18

COPY . .

RUN npm cache clean --force


RUN npm install --force
CMD node index.js
