APP=nginx-server
CURRENT_DIR=$(dir $(abspath $(lastword $(MAKEFILE_LIST))))
FROM=$(CURRENT_DIR)public
TO=/public

serve:
	docker build -t $(APP) .
	docker stop $(APP) || true
	docker rm $(APP) -f || true
	docker run -d -p 80:80 --volume $(FROM):$(TO) --name $(APP) $(APP):latest
	docker container prune -f
	docker image prune -a -f
