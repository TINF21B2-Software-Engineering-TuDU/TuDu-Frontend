# Build svelte app
FROM node:latest as build


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

# serve the standalone node server we built
FROM node:latest as serve

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm install --only=production

COPY --from=build /app/build/* ./

EXPOSE 3000

CMD ["node", "index.js"]

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1
