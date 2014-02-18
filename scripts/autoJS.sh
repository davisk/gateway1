#!/bin/bash

#used for allowing multiple file
multifile="y"

if [[ $multifile = "y" ]]
then
    echo "Enter the name of the file you widh to be formatted:"
    read FILENAME
    js-beautify "$FILENAME"
fi
echo "Done"

