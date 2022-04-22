FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY index.js ./
CMD ["npm", "start"]