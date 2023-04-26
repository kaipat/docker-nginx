serve:
	docker-compose up --build --detach
	docker container prune --force && docker-compose rm --force && docker image prune --force



