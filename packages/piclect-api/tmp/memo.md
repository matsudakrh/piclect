docker-compose run --rm rails $@


```
RUN npm install -g -s --no-progress yarn && \
    yarn install && \
    yarn cache clean

CMD [ "yarn", "start" ]

```