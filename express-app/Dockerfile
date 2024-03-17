FROM node:16

COPY . .

RUN npm cache clean --force

RUN rm -f package-lock.json

RUN npm install

CMD node index.js
