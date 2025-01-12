# Use the official Node.js 18 Alpine image as the base image
FROM node:20-alpine

# Set environment variable to skip downloading Chromium when installing Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install necessary dependencies and Chromium for Puppeteer
RUN apk update && \
    apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    yarn \
    && apk add --no-cache --virtual .build-deps \
    python3 \
    make \
    g++ \
    && npm install -g npm@latest

RUN apk add libreoffice
RUN apk add openjdk8-jre

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]