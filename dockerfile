FROM node:latest


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

EXPOSE 3000

CMD ["node", "build/index.js"]

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

# --------------