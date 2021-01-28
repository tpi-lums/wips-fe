#!/bin/bash

# clean build dir
#rm -rf build node_modules
rm -rf build
# install node packages
# npm install
# pull latest changes
git pull
# build
grunt --api="/" --rootPath="build/"
# compress build text items
# find build | grep -E '\.js$|\.html$|\.css$' | xargs gzip -r
