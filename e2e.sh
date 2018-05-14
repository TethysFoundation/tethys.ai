#!/usr/bin/env bash
set -ev

yarn build --staging
yarn serve &
yarn run cypress run

# kill serve process
kill %1
