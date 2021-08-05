FROM node:alpine

WORKDIR '/Catbird'

COPY package.json .
RUN npm install
COPY . .
RUN npm run react:prod
CMD ["npm", "start"]