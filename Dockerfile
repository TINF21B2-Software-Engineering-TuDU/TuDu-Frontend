FROM node:18-alpine AS build


# --------------
# This is the dockerfile for the frontend
# Build with `docker build . -t tudu/frontend:latest`
# Test with `docker run --name tudu-frontend -p 3000:3000 -d tudu/frontend:latest`
# --------------
LABEL maintainer="Proliecan <65495509+Proliecan@users.noreply.github.com>"
LABEL date="2023-06-24"
# --------------

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]