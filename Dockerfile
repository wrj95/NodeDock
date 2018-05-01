 FROM node:latest

 RUN mkdir /api

 RUN npm install nodemon -g

 WORKDIR ./api

 COPY package*.json .

 RUN npm install   

 COPY . .

 EXPOSE 8080

 CMD ["npm", "start"]