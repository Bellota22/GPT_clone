#!/bin/bash
if ! command -v docker &> /dev/null
then
    echo "Docker could not be found, please install it first."
    exit
elif ! command -v docker-compose &> /dev/null
then
    echo "Docker Compose could not be found, please install it first."
    exit
fi

echo "Building and starting Docker containers..."
docker-compose build && docker-compose up -d

echo "Containers are up and running."