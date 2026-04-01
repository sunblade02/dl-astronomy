FROM node:slim

WORKDIR /app

COPY frontend /app

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]