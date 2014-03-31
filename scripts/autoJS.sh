#!/bin/bash

#used for allowing multiple file
echo "Enter the name of the file you widh to be formatted:"

read FILENAME
js-beautify $FILENAME

echo "Done"

