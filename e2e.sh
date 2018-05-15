#!/usr/bin/env bash
set -ev

yarn build --staging
yarn serve &

# wait for serve to start
while ! curl -s localhost:3000 >/dev/null; do
  sleep 1
done

yarn run cypress run

# kill serve process
kill %1
