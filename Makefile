APP=nginx-server

serve:
	docker build -t $(APP) .
	docker stop $(APP) || true
	docker rm $(APP) -f || true
	docker run -d -p 80:80 --volume ~/Code/docker-nginx/public:/public --name $(APP) $(APP):latest
	docker container prune -f
	docker image prune -a -f
