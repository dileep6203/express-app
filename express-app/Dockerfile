FROM node:16

COPY . .

RUN npm cache clean --force

RUN npm install

CMD node index.js
