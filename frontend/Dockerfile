FROM node:20

WORKDIR /frontend
COPY package.json .
RUN npm install

EXPOSE 4000

COPY . .
CMD npm start