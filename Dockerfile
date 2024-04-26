# Use an official Node.js runtime as the base image
FROM node:latest as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Replace environment file based on build configuration
ARG configuration=production
RUN ng build --configuration $configuration

# Use NGINX to serve the Angular app in production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
