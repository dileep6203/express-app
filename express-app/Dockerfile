FROM node:20.11

COPY . .

RUN npm cache clean --force


RUN npm install
RUN npm install --verbose
CMD node index.js
