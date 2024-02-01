#!/bin/sh

# TODO UPDATE PROPER FILE PATH
cd /home/projects/

# Builds the `dev` branch 
res=$(git pull origin dev | grep Already)

if [[ ${res} =~ 'Already' ]]
then
  echo 'Site already up to date'
else
  npm ci
  npm run build
fi