FROM node:16

COPY . .

RUN npm cache clean --force

RUN rm -f package-lock.json
RUN npm install -g npm@latest
RUN npm install

CMD node index.js
