#!/bin/bash

if [ -z "${DEPLOY_ENV}" ] || [ "${DEPLOY_ENV}" = "prod" ]; then
    # We build the wallet each time we run the docker and it takes a couple of minutes
    npm run build
    cp -r /localcoin-ui/build/dist/* /var/www/
    nginx -g "daemon off;"
else
    npm run start
fi
