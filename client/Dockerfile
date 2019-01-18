# build stage
FROM node:10-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
