FROM node:20-alpine3.18 AS development

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --chown=node:node package*.json ./
COPY --chown=node:node src ./src

RUN npm ci

COPY --chown=node:node . .

USER node

FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY --chown=node:node package*.json ./
COPY --chown=node:node src ./src

COPY --chown=node:node --from=development /app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

FROM node:20-alpine3.18 AS production

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

EXPOSE 3000

ENV PORT 3000

CMD ["node", "start"]
