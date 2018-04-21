 FROM node:latest  

 RUN npm install nodemon -g

 WORKDIR .

 COPY package.json .

 RUN npm install   

 COPY . .

 EXPOSE 8080 

 CMD ["npm", "start"]