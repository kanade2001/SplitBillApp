FROM node:22.10-alpine

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

ENV CHOKIDAR_USEPOLLING=true
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "dev"]