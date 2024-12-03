FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]
