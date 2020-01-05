FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . . 

RUN npm run build

FROM nginx:alpine 
EXPOSE 3000
COPY  --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]

# https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a