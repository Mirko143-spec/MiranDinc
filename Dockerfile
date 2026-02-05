FROM node:22.22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.5-alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
