FROM keymetrics/pm2:12-slim
RUN mkdir -p /app
ADD  ./server  /app
WORKDIR /app
RUN npm install
ENTRYPOINT npm run start;sleep 100000000
EXPOSE 80:80
