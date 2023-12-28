FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:latest
RUN mkdir -p /etc/nginx/nginx-App
COPY --from=builder /app/dist /etc/nginx/nginx-App
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80