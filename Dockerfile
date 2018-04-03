 FROM node:latest  

 RUN npm install nodemon -g

 WORKDIR /app 

 COPY package.json /app

 RUN npm install   

 COPY . .

 EXPOSE 8080 

 CMD ["npm", "start"]