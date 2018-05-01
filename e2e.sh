#!/usr/bin/env bash

yarn build --staging

yarn serve --silent &

SERVE_PID=$!

yarn run cypress run

kill -9 ${SERVE_PID}
