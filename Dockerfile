FROM nginx:1.25.5-alpine

WORKDIR /app

RUN npm run build

COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
