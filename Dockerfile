 FROM node:latest

 RUN mkdir /api

 WORKDIR ./api

 COPY package*.json .

 RUN npm install   

 COPY . .

 RUN npm install nodemon -g
 
 RUN npm install

 CMD ["npm", "start"]