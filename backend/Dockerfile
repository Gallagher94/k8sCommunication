FROM node:10-alpine 

WORKDIR "/app"

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8050

CMD ["npm", "start"]