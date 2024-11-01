#!/bin/bash

# 运行构建命令
echo "Running pnpm build..."
pnpm build

# 将构建后的文件传输到服务器
echo "Deploying files to server..."
scp -r dist/* root@192.168.9.148:/usr/share/nginx/bi

echo "Deployment completed!"
