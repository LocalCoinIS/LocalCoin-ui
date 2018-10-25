FROM node:6

# Install nginx
RUN apt-get update \
  && apt-get install -y nginx --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir /root/.ssh
COPY keys /root/.ssh

RUN npm install -g browserify cross-env

# We copy the code from the docker-compose-yml
# RUN git clone https://github.com/localcoinis/localcoin-ui.git /bitshares-ui
RUN mkdir /bitshares-ui
WORKDIR /bitshares-ui

ADD package.json ./
RUN cross-env npm install --env.prod

EXPOSE 80
EXPOSE 8080

## Copying default configuration
ADD conf/nginx.conf /etc/nginx/nginx.conf
ADD conf/start.sh /start.sh
RUN chmod a+x /start.sh

## Entry point
ENTRYPOINT ["/start.sh"]
