#!/bin/bash
# Script for commiting to github and autoformatting code

git pull https://github.com/Team-H/gateway

touch temp

git status | grep .py > temp

echo Please wait while we run autopep8
cat temp | xargs -n 1 autopep8 --in-place --aggressive 
echo done

git status | grep .js > temp

echo Please wait while we run js-beautify
cat temp | xargs -n 1 js-beautify 
echo done

rm temp

cd ..

git add --all

git commit --all

git push origin develop

cd scripts

echo Finished
