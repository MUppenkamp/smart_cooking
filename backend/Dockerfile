#FROM node:latest
#
## Create app directory
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
#CMD [ "npm", "start" ]


# Build Dockerfile
FROM node:16-slim AS builder
ENV BABEL_ENV production
WORKDIR /build
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Main Dockerfile
FROM node:16-slim

ARG BUILD_VERSION=latest
ENV NODE_ENV production
ENV PORT 3000
ENV BUILD_VERSION=$BUILD_VERSION

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY --from=builder /build/build ./build

CMD ["node","build/index.js"]
