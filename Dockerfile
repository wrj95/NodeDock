 FROM node:latest

 RUN mkdir /api

 WORKDIR ./api

 COPY package*.json .

 RUN npm install   

 COPY . .

 RUN npm install -g nodemon

 RUN npm install mysql

 CMD ["npm", "start"]