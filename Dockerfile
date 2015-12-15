FROM node

RUN mkdir /app

COPY . /app

RUN cd /app && npm install

WORKDIR /app

EXPOSE 80

CMD ["npm", "start"]