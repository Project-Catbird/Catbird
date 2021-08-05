 # After -p we are mapping localport on my machine to a port inside the container
docker run -d -p 3000:3127 --name catbird --rm catbird
