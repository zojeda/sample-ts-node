FROM node

RUN mkdir -p /opt/sample-app
WORKDIR /opt/sample-app

ADD package.json /opt/sample-app
RUN npm install --production

ADD ./lib /opt/sample-app


EXPOSE 4444
CMD [ "node", "hello.js" ]