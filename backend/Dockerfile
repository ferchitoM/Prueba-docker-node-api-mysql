FROM node:20

WORKDIR /backend
COPY package.json .
RUN npm install

EXPOSE 3000

COPY . .
CMD npm start