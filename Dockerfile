FROM nginx:1.25.5-alpine

WORKDIR /app

COPY . /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
