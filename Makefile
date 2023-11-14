LOG_DIR=$(CURDIR)/logs
CURRENT_DIR_NAME=$(shell basename "$(CURDIR)")
IMAGE=$(CURRENT_DIR_NAME):development
CONTAINER=$(CURRENT_DIR_NAME).development
HOST_PUBLIC_DIR=~/Desktop
CONTAINER_PUBLIC_DIR=/public

serve:
	rm -rf logs
	docker build -t $(IMAGE) .
	docker stop $(CONTAINER) || true
	docker rm $(CONTAINER) -f || true
	docker run -d --volume $(LOG_DIR):/var/log/nginx -p 80:80 --volume $(HOST_PUBLIC_DIR):$(CONTAINER_PUBLIC_DIR) --name $(CONTAINER) $(IMAGE)
	docker container prune -f
	docker image prune -a -f
