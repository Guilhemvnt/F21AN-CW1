#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 [user | root]"
    exit 1
fi

USERNAME=$1

if [ "$(docker ps -aq -f name=my_vuln_machine)" ]; then
    echo "Deleting old container..."
    docker stop my_vuln_machine >/dev/null 2>&1
    docker rm my_vuln_machine >/dev/null 2>&1
fi

docker build -t linux_vulnerable .

docker run --rm -d -p 2222:22 --name my_vuln_machine linux_vulnerable

echo "Launching SSH..."
while ! nc -z localhost 2222; do
  sleep 1
done

echo "Connecting using $USERNAME..."
ssh "$USERNAME"@localhost -p 2222
