FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json .

RUN npm i
RUN npm i nodemon -g
RUN npm i typescript -g

COPY . .

EXPOSE 3000

CMD ["npm run dev"]