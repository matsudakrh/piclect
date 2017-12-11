FROM node:9.2.1-alpine
ENV APP_ROOT /var/www/app

#ADD . /var/www/app
WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
COPY package-lock.json $APP_ROOT

RUN npm i

COPY . $APP_ROOT

EXPOSE 3000

CMD ["npm", "start"]