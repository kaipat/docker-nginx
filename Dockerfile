FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./conf.d /etc/nginx/conf.d
COPY ./etc/mime.types /etc/nginx/mime.types

CMD ["nginx", "-g", "daemon off;"]
