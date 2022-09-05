FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget


ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN npm install express --save
RUN npm install sequelize --save
RUN npm install mysql2 --save
RUN npm install ejs --save

EXPOSE 5000
CMD [ "node", "index.js" ]
