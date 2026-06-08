FROM node:22.16-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN test -f /app/dist/index.html && test -d /app/dist/assets

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
RUN test -f /usr/share/nginx/html/index.html && test -d /usr/share/nginx/html/assets

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
