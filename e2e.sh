#!/usr/bin/env bash

yarn build --staging
yarn serve &
yarn run cypress run

# kill serve process
kill %1
