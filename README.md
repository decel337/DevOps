We create simple node js app for test docker
# Build image
In terminal write command, when project was created
```
docker build -t 'decel337/appjs' .
```
# Run image for test
Run docker on 80 port and with 1 cpu and 512m memory:
```
docker run -p 80:80 --cpus=1 -m 512m decel337/appjs
```
We can entry to localhost:80 or write simple command for check connection:
```
curl http://localhost:80
```
# Push image on DockerHub
Login
```
docker login
```
After write this command, we must enter out login and password
For push we must write next command:
```
docker username/appjs(or your name of project)
```
My repository: https://hub.docker.com/repository/docker/decel337/appjs
