# Docker Nginx


## How to use
```bash
  make serve
```

## Useful command

将容器里的`nginx`配置复制到宿主机
```bash
docker cp nginx-server:/etc/nginx/conf.d/default.conf ~/Code/docker-nginx
```

nginx的入口文件位置，里面引用了`default.conf`
```bash
/etc/nginx/nginx.conf
```

在运行的容器里执行命令
```bash
docker exec nginx-server nginx -t
```

