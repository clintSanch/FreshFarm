# Stage 1
FROM node:18.15.0-alpine as node
RUN mkdir -p /FreshFarm

# ...then we navigate to the /FreshFarm directory or folder in the container
WORKDIR /FreshFarm
ENV PATH /FreshFarm/node_modules/.bin:

# Copying the package.json file from our project directory to the FreshFarm directory
COPY package.json .
COPY package-lock.json .

# Installing all the package.json dependencies into the /FreshFarm directory in the container
RUN npm install @angular/cli 
RUN npm install

#copy all the files in the local directory into the /FreshFarm directory in the container filesystem
COPY . /FreshFarm 
# Generate the build of the application
RUN npm run build --prod


# Stage 2
FROM nginx:alpine

WORKDIR /FreshFarm

# Copy the build output to replace the default nginx contents.
COPY --from=node /FreshFarm/dist/fresh-farm-app /usr/share/nginx/html

# Expose port 80
EXPOSE 4200:80

CMD npm run build