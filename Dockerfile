FROM node:18.16

RUN mkdir -p /home/app

ENV NODE_ENV=dev

COPY . /home/app

WORKDIR /home/app

RUN npm install && npx prisma generate && npx tsc

EXPOSE 3000
EXPOSE 3001

CMD ["node", "/home/app/dist/app.js"]