# Docker run nginx


## How to use
1. 修改`Makefile`公共资源文件夹映射路径
   ```base
    # Makefile
    docker run -d -p 80:80 --volume [your public folder path]:/public --name $(APP) $(APP):latest
    ```

2. 生成镜像并运行容器
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

