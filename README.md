# protected-routes-reactjs
protected routes with HOC with Outlet

# How to run project on docker
Step 1) Docker Image Build
docker build -t(tag Name) react-auth . (Dockerfile location)
eg -> docker build -t  react-application .


Step 2) Image ko lekar container run krna
docker run --name(containerName  optional) react-application-container --rm(remove already exit container i.e no name conflict) react-application (image name)


eg  -> docker run --name react-applicaton-container --rm react-application
Run last command of DockerFile eg. CMD ["npm","run","start"]

In this command -> project run on inside container on host 3000 not running on local system.

Running container -> docker ps

Stop container -> docker stop containerName or containerId
eg -> docker stop  react-applicaton-container


Access On host(local) Machine
 docker run --name(container name optional) react-applicaton-container -d (distached mode) -p(portMapping) 3000:3000 react-application(image name)


eg-> docker run --rm --name react-applicaton-container -d -p 3000:3000 react-application


Hot reload on development server 
(Change local system -> automatically chnage on container)
 docker run --name(container name optional) react-applicaton-container -d (distached mode) -p(portMapping) 3000:3000 -v (bindMount) $(complete path of corrent folder):/app(container app path)  react-application(image name)

In windows ->replace  $(complete path of corrent folder) ->  %cd%:/path/to/your/app


eg-> docker run --rm --name react-applicaton-container -d -p 3000:3000 -v  $(pwd):/app react-application

In Window -> docker run --rm --name react-applicaton-container -d -p 3000:3000 -v "C:\Users\Dell\Desktop\React js\react-auth-demo:/app" react-application


See Container logs -> docker logs 94336cd96517(container Id)
