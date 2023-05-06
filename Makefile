serve:
	docker build -t nginx .
	docker stop nginx || true
	docker rm nginx -f || true
	docker run -d -p 80:80 -p 443:443 --volume /Users/jiapeng/Code/nginx/public:/usr/share/nginx/html --name nginx nginx:latest
	docker container prune -a -f
	docker image prune -a -f
