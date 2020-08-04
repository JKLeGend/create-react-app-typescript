#!/usr/bin/env bash

docker stop create-react-app-typescript
docker rm create-react-app-typescript
docker rmi jk-create-react-app-typescript
docker build -t jk-create-react-app-typescript -f Dockerfile .
docker run -d \
       -it \
       -p8080:8080 \
       --name=create-react-app-typescript \
       jk-create-react-app-typescript
