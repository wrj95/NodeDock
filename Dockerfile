 FROM node:latest  

 WORKDIR .

 COPY package.json .

 RUN npm install   

 COPY . .

 RUN npm install nodemon


 EXPOSE 8080

 CMD ["npm", "start"]