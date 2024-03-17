FROM node:18

COPY . .

RUN npm cache clean --force


RUN npm install
RUN npm install --verbose
CMD node index.js
