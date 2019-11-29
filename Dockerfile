FROM node:13.0.1-alpine
RUN npm i -g pm2
RUN mkdir -p /app
ADD  ./server  /app
WORKDIR /app
RUN npm install
ENTRYPOINT npm run start;sleep 100000000
EXPOSE 80:80
